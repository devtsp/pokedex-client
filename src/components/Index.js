import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAndSetPage, getAndSetPokemon } from '../redux/actions.js';

const Index = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const activePokemon = pokemon =>
		pokemon === state.currentPokemon?.Name ? 'active-pokemon' : '';

	React.useEffect(() => {
		dispatch(getAndSetPage(0));
	}, [dispatch]);

	const handlePage = pageNumber => {
		dispatch(getAndSetPage(pageNumber));
	};

	return (
		<div id="Index" className="d-flex flex-column p-3">
			<div className="d-flex flex-column">
				<button
					className="m-1 btn btn-dark btn-sm"
					onClick={() => handlePage(state.currentPage.pageIndexes.previous)}
				>
					Previous
				</button>
				<button
					className="m-1 btn btn-dark btn-sm"
					onClick={() => handlePage(state.currentPage.pageIndexes.next)}
				>
					Next
				</button>
			</div>

			<h6 className="text-center my-2">
				Page: {state.currentPage && state.currentPage.pageIndexes.actual}
			</h6>

			<ul className="list-unstyled text-center list-group">
				{state.currentPage &&
					state.currentPage.pokemonNames.map((pokemon, i) => (
						<li
							className={`list-group-item p-1 pointer ${activePokemon(
								pokemon
							)}`}
							key={i}
							id={pokemon}
							onClick={e => dispatch(getAndSetPokemon(e.target.id))}
						>
							{pokemon}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Index;
