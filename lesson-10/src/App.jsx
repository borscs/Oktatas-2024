import Header from "./componenst/Header.jsx";
import Meals from "./componenst/Meals.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";
import {UseProgressContextProvider} from "./store/UseProgressContext.jsx";
import Cart from "./componenst/Cart.jsx";

function App() {
	return (
		<UseProgressContextProvider>
			<CartContextProvider>
				<Header/>
				<Meals/>
				<Cart/>
			</CartContextProvider>
		</UseProgressContextProvider>
	);
}

export default App;
