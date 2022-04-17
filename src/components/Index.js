import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAndSetPage, getAndSetPokemon } from '../redux/actions.js';

const Index = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

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
					onClick={() => handlePage(state.actualPage.pageIndexes.previous)}
				>
					Previous
				</button>
				<button
					className="m-1 btn btn-dark btn-sm"
					onClick={() => handlePage(state.actualPage.pageIndexes.next)}
				>
					Next
				</button>
			</div>

			<h6 className="text-center my-2">
				Page: {state.actualPage && state.actualPage.pageIndexes.actual}
			</h6>

			<ul className="list-unstyled text-center list-group">
				{state.actualPage &&
					state.actualPage.pokemonNames.map((pokemon, i) => (
						<li
							className="list-group-item p-1 pointer"
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
