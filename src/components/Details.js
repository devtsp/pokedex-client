import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAndSetPokemon } from '../redux/actions';

const Details = () => {
	const dispatch = useDispatch();
	const { currentPokemon } = useSelector(state => state);

	return (
		<>
			{currentPokemon && (
				<article id="Details">
					<figure className="pokemon-figure">
						<h1>
							{`${currentPokemon.Name} `}{' '}
							<span className="type">({currentPokemon.Type})</span>
						</h1>

						<img
							className="image"
							src={currentPokemon['Image URL']}
							alt={currentPokemon.Name}
						/>
						<figcaption className="flavor">
							<p>"{currentPokemon['Flavor Text']}"</p>
						</figcaption>
					</figure>
					<ul className="info">
						<li className="abilities">
							<h1> Abilities:</h1>
							<span> {currentPokemon.Abilities.split().join(', ')}</span>
						</li>
						{currentPokemon['Evolves From'] && (
							<li>
								<h1>Evolves from:</h1>
								<span
									className="link"
									onClick={e => dispatch(getAndSetPokemon(e.target.innerText))}
								>
									{currentPokemon['Evolves From']}
								</span>
							</li>
						)}
						{currentPokemon['Evolves To'] && (
							<li>
								<h1>Evolves to:</h1>
								<span
									className="link"
									onClick={e => dispatch(getAndSetPokemon(e.target.innerText))}
								>
									{currentPokemon['Evolves To']}
								</span>
							</li>
						)}
					</ul>
				</article>
			)}
		</>
	);
};

export default Details;
