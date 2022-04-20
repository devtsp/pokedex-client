import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
	const dispatch = useDispatch();
	const { currentPokemon } = useSelector(state => state);

	return (
		<>
			{currentPokemon && (
				<div id="Details">
					<ul>
						<div className="content">
							<div>
								<h4>
									{`${currentPokemon.Name} `}
									<span className="type">({currentPokemon.Type})</span>
								</h4>
								<li>
									<img
										className="image"
										src={currentPokemon['Image URL']}
										alt={currentPokemon.Name}
									/>
								</li>
								<li className="flavor">
									<i>"{currentPokemon['Flavor Text']}"</i>
								</li>
							</div>
							<div>
								<li className="abilities">
									<strong>Abilities: </strong>
									<span> {currentPokemon.Abilities.split().join(', ')}</span>
								</li>
								<div className="evolutions">
									{currentPokemon['Evolves From'] && (
										<li>
											<span>🔗 Evolves from </span>
											<strong>{currentPokemon['Evolves From']}</strong>
										</li>
									)}
									{currentPokemon['Evolves To'] && (
										<li>
											<span>🔗 Evolves to </span>
											<strong>{currentPokemon['Evolves To']}</strong>
										</li>
									)}
								</div>
							</div>
						</div>
					</ul>
				</div>
			)}
		</>
	);
};

export default Details;
