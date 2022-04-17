import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
	const dispatch = useDispatch();
	const { currentPokemon } = useSelector(state => state);

	return (
		<>
			{currentPokemon && (
				<div id="Details">
					<ul className="list-unstyled">
						<div className="change-orientation">
							<div>
								<h4 className="text-center fw-bold">
									{currentPokemon.Name} ({currentPokemon.Type})
								</h4>
								<li className="text-center main-pic-container">
									<img
										className="img-fluid"
										src={currentPokemon['Image URL']}
										alt={currentPokemon.Name}
									/>
								</li>
								<li className="text-center text-black-50 p-2 mb-3">
									<i>"{currentPokemon['Flavor Text']}"</i>
								</li>
							</div>
							<div className="p-4">
								<li>
									<strong>Abilities: </strong>{' '}
									<span> {currentPokemon.Abilities.split().join(', ')}</span>
								</li>
								{currentPokemon['Evolves From'] && (
									<li>
										<span>Evolves from </span>{' '}
										<strong className="text-decoration-underline text-primary pointer">
											{currentPokemon['Evolves From']}
										</strong>
									</li>
								)}
								{currentPokemon['Evolves To'] && (
									<li>
										<span>Evolves to</span>{' '}
										<strong className="text-decoration-underline text-primary pointer">
											{currentPokemon['Evolves To']}
										</strong>
									</li>
								)}
							</div>
						</div>
					</ul>
				</div>
			)}
		</>
	);
};

export default Details;
