import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import ShoppingCarProvider from './store/shopping-cart-context.jsx';

function App() {


	return (
		<ShoppingCarProvider>
			<Header/>
			<Shop/>
		</ShoppingCarProvider>
	);
}

export default App;
