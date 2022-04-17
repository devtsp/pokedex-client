import React from 'react';

import { getPage } from '../services/pokedex.js';
import { PokedexContext } from '../state/context';
import { setPage, toggleLoading, setPokemon } from '../state/actions.js';
import { getPokemon } from '../services/pokedex.js';

const Index = () => {
	const { state, dispatch } = React.useContext(PokedexContext);

	React.useEffect(() => {
		const getData = async () => {
			const page = await getPage(0, state.pageFactor);
			dispatch(setPage(page));
		};
		getData();
	}, [dispatch, state.pageFactor]);

	const changePage = targetPage => {
		const asyncGetPage = async targetPage => {
			const page = await getPage(targetPage, state.pageFactor);
			dispatch(setPage(page));
		};
		asyncGetPage(targetPage);
	};

	const displayPokemon = pokemonNameOrId => {
		(async () => {
			dispatch(toggleLoading());
			const pokemon = await getPokemon(pokemonNameOrId);
			dispatch(setPokemon(pokemon));
			dispatch(toggleLoading());
		})();
	};

	return (
		<div className="d-flex flex-column p-3 me-2 border-end border-secondary">
			<div id="pagination" className="d-flex flex-column">
				<button
					className="m-1 btn btn-dark btn-sm"
					onClick={() => changePage(state.actualPage.pageIndexes.previous)}
				>
					Previous
				</button>
				<button
					className="m-1 btn btn-dark btn-sm"
					onClick={() => changePage(state.actualPage.pageIndexes.next)}
				>
					Next
				</button>
			</div>

			<h6 className="text-center my-2">
				Page: {state.actualPage && state.actualPage.pageIndexes.actual}
			</h6>

			<ul id="pokemons-list" className="list-unstyled text-center list-group">
				{state.actualPage &&
					state.actualPage.pokemonNames.map((pokemon, i) => (
						<li
							className="list-group-item p-1"
							key={i}
							id={pokemon}
							onClick={e => displayPokemon(e.target.id)}
						>
							{pokemon}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Index;
