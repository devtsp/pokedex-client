import React from 'react';

import { getPage } from '../services/pokedex.js';
import { PokedexContext } from '../state/context';
import { setPage } from '../state/actions.js';

const Page = () => {
	const { state, dispatch } = React.useContext(PokedexContext);

	React.useEffect(() => {
		const getData = async () => {
			const page = await getPage(0, 10);
			dispatch(setPage(page));
		};
		getData();
	}, [dispatch]);

	const changePage = targetPage => {
		const asyncGetPage = async targetPage => {
			const page = await getPage(targetPage, 10);
			dispatch(setPage(page));
		};
		asyncGetPage(targetPage);
	};

	return (
		<div>
			<h3>Page: {state.actualPage && state.actualPage.pageIndexes.actual}</h3>

			<button onClick={() => changePage(state.actualPage.pageIndexes.previous)}>
				Previous
			</button>
			<button onClick={() => changePage(state.actualPage.pageIndexes.next)}>
				Next
			</button>

			{state.actualPage &&
				state.actualPage.pokemonNames.map((pokemon, i) => (
					<div key={i}>{pokemon}</div>
				))}
		</div>
	);
};

export default Page;
