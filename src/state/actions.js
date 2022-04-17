import actionTypes from './types.js';

export const setPage = page => ({
	action: actionTypes.SET_PAGE,
	payload: page,
});

export const setPokemon = pokemon => ({
	action: actionTypes.SET_POKEMON,
	payload: pokemon,
});

export const toggleLoading = () => ({
	action: actionTypes.TOGGLE_LOADING,
});
