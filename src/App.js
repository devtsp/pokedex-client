import React, { useEffect } from 'react';

import Layout from './pages/Layout.js';
import { Provider } from 'react-redux';

import { handleCacheVersion } from './storage/pokedex-storage.js';
import { store } from './redux/store.js';

function App() {
	useEffect(() => {
		handleCacheVersion();
	}, []);
	return (
		<div className="App">
			<Provider store={store}>
				<Layout></Layout>
			</Provider>
		</div>
	);
}

export default App;
