import React from 'react';

import Index from '../components/Index';
import Details from '../components/Details';

const Layout = () => {
	return (
		<div>
			<header>
				<h1 id="app-header">Pokedex</h1>
			</header>
			<main className="Layout">
				<Index></Index>
				<Details></Details>
			</main>
		</div>
	);
};

export default Layout;
