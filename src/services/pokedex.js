import {
	savePageToStorage,
	getPageFromStorage,
	getPokemonFromStorage,
	savePokemonToStorage,
} from '../storage/pokedex-storage.js';
import {
	fetchPage,
	fetchPokemon,
	fetchEvolutionChain,
	fetchPokemonSpecie,
} from '../api/pokeapi.js';
import { mapPokemon } from '../mappers/pokemon-mapper.js';
import { mapPage } from '../mappers/page-mapper.js';

const circularPagination = pageNumber => {
	return pageNumber === -1 ? 25 : pageNumber === 26 ? 1 : pageNumber;
};

export const getPage = async (pageNumber, numberOfPokemons) => {
	const controlledPage = circularPagination(pageNumber);
	try {
		return getPageFromStorage(controlledPage);
	} catch (error) {
		const pagination = await fetchPage(controlledPage, numberOfPokemons);
		const page = mapPage(controlledPage, pagination);
		savePageToStorage(page);
		return page;
	}
};

export const getPokemon = async pokemonNameOrId => {
	try {
		return getPokemonFromStorage(pokemonNameOrId);
	} catch (error) {
		const pokemon_info = await fetchPokemon(pokemonNameOrId);
		const pokemon_species = await fetchPokemonSpecie(pokemonNameOrId);
		const evolutionEndpoint = pokemon_species.evolution_chain.url;
		const evolution_chain = await fetchEvolutionChain(evolutionEndpoint);
		const pokemon = mapPokemon(pokemon_info, pokemon_species, evolution_chain);
		savePokemonToStorage(pokemon);
		return pokemon;
	}
};
