import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pokedexReducer } from './reducer';

export const store = createStore(
	pokedexReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: f => f
	)
);
