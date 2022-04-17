import React from 'react';

import actionTypes from './types.js';

const initialPokedexState = {
	loading: true,
	errors: {},
};

function pokedexReducer(state, { action, payload }) {
	switch (action) {
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
				actualPage: payload,
			};
		default:
			return state;
	}
}

export default function usePokedexReducer() {
	const [state, dispatch] = React.useReducer(
		pokedexReducer,
		initialPokedexState
	);

	console.log(state.actualPage);

	return {
		state,
		dispatch,
	};
}
