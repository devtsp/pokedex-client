import actionTypes from './types.js';

export const setPage = page => ({
	action: actionTypes.SET_PAGE,
	payload: page,
});
