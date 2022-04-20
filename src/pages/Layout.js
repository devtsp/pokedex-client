import React from 'react';

import Index from '../components/Index';
import Details from '../components/Details';

const Layout = () => {
	return (
		<div>
			<h1 id="app-header">Pokedex</h1>
			<div className="d-flex justify-content-center">
				<Index></Index>
				<Details></Details>
			</div>
		</div>
	);
};

export default Layout;
