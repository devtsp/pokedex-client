import React from 'react';

import { PokedexContext } from '../state/context';

const Details = () => {
	const {
		state: { currentPokemon },
	} = React.useContext(PokedexContext);

	return (
		<div className="p-3">
			{currentPokemon && (
				<>
					<h4 className="text-center fw-bold">
						{currentPokemon.Name} ({currentPokemon.Type})
					</h4>
					<ul className="list-unstyled">
						<li className="text-center ">
							<img
								style={{ width: '200px' }}
								src={currentPokemon['Image URL']}
								alt={currentPokemon.Name}
							/>
						</li>
						<li className="text-center text-black-50 p-2 mb-3">
							<i>"{currentPokemon['Flavor Text']}"</i>
						</li>
						<li>
							<strong>Abilities: </strong>{' '}
							<span> {currentPokemon.Abilities.split().join(', ')}</span>
						</li>
						{currentPokemon['Evolves From'] && (
							<li>
								<span>Evolves from </span>{' '}
								<strong className="text-decoration-underline text-primary">
									{currentPokemon['Evolves From']}
								</strong>
							</li>
						)}
						{currentPokemon['Evolves To'] && (
							<li>
								<span>Evolves to</span>{' '}
								<strong className="text-decoration-underline text-primary">
									{currentPokemon['Evolves To']}
								</strong>
							</li>
						)}
					</ul>
				</>
			)}
		</div>
	);
};

export default Details;
