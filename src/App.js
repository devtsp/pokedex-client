import React, { useEffect } from 'react';

import Layout from './pages/Layout.js';

import { PokedexContext } from './state/context.js';
import usePokedexReducer from './state/usePokedexReducer.js';
import { handleCacheVersion } from './storage/pokedex-storage.js';

function App() {
	useEffect(() => {
		handleCacheVersion();
	}, []);
	return (
		<div className="App">
			<PokedexContext.Provider value={usePokedexReducer()}>
				<h1>App</h1>
				<Layout></Layout>
			</PokedexContext.Provider>
		</div>
	);
}

export default App;
