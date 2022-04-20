import actionTypes from './types.js';
import { getPage, getPokemon } from '../services/pokedex.js';

export const getAndSetPage = pageNumber => async (dispatch, getState) => {
	dispatch(toggleLoading());
	try {
		const page = await getPage(pageNumber, getState().pageFactor);
		dispatch(setPage(page));
		dispatch(getAndSetPokemon(page.pokemonNames[0]));
	} catch (err) {
		dispatch(setError(err));
	} finally {
		dispatch(toggleLoading());
	}
};

export const getAndSetPokemon =
	pokemonNameOrId => async (dispatch, getState) => {
		try {
			const pokemon = await getPokemon(pokemonNameOrId);
			dispatch(setPokemon(pokemon));
		} catch (err) {
			dispatch(setError(err));
		} finally {
			dispatch(toggleLoading());
		}
	};

export const setPokemon = pokemon => ({
	type: actionTypes.SET_POKEMON,
	payload: pokemon,
});

export const toggleLoading = () => ({
	type: actionTypes.TOGGLE_LOADING,
});

export const setError = error => ({
	type: actionTypes.SET_ERROR,
	payload: error.message,
});

export const setPage = page => ({
	type: actionTypes.SET_PAGE,
	payload: page,
});
