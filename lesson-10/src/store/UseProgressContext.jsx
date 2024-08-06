import {createContext, useState} from "react";


const UseProgressContext = createContext({
	progress: '', // 'cart', 'checkout'
	showCart: () => {},
	hideCart: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
});

export function UseProgressContextProvider({children}){
	const [userProgress, setUserProgress] = useState()

	function showCart() {
		setUserProgress('cart');
	}
	function hideCart() {
		console.log("Context");
		setUserProgress('');
	}
	function showCheckout() {
		setUserProgress('checkout');
	}
	function hideCheckout() {
		setUserProgress('');
	}

	const userProgressCtx = {
		progress: userProgress, // 'cart', 'checkout'
		showCart,
		hideCart,
		showCheckout,
		hideCheckout,
	}

	return (
		<UseProgressContext.Provider value={userProgressCtx}>
			{children}
		</UseProgressContext.Provider>
	)
}

export default UseProgressContext
