import actionTypes from './types.js';

const initialPokedexState = {
	loading: true,
	errors: {},
	pageFactor: 13,
	currentPage: null,
	currentPokemon: null,
};

export function pokedexReducer(state = initialPokedexState, { type, payload }) {
	switch (type) {
		case actionTypes.TOGGLE_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		case actionTypes.SET_ERROR:
			return {
				...state,
				error: payload,
			};
		case actionTypes.SET_PAGE:
			return {
				...state,
				currentPage: payload,
			};
		case actionTypes.SET_POKEMON:
			return {
				...state,
				currentPokemon: payload,
			};
		default:
			return state;
	}
}
