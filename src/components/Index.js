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
		<aside id="Index">
			<button
				onClick={() => handlePage(state.currentPage.pageIndexes.previous)}
			>
				Previous
			</button>
			<button onClick={() => handlePage(state.currentPage.pageIndexes.next)}>
				Next
			</button>

			<ul>
				<li>
					<p className="pagination-info">
						Page:{' '}
						{state.currentPage &&
							state.currentPage.pageIndexes.actual + 1 + '/69'}
					</p>
				</li>
				{state.currentPage &&
					state.currentPage.pokemonNames.map((pokemon, i) => (
						<li
							className={`${activePokemon(pokemon)}`}
							key={i}
							id={pokemon}
							onClick={e => dispatch(getAndSetPokemon(e.target.id))}
						>
							{pokemon}
						</li>
					))}
			</ul>
		</aside>
	);
};

export default Index;
