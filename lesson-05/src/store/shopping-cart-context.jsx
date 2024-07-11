import {createContext, useReducer, useState} from "react";
import {DUMMY_PRODUCTS} from "../dummy-products.js";

export const ShoppingCartContext = createContext({
	items: [],
	addItemToCart: () => {
	},
	updateItemQuantity: () => {
	}
});

function shoppingCartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = [...state.items];

		const existingCartItemIndex = updatedItems.findIndex(
			(cartItem) => cartItem.id === action.id
		);
		const existingCartItem = updatedItems[existingCartItemIndex];

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			const product = DUMMY_PRODUCTS.find((product) => product.id === action.id);
			updatedItems.push({
				id: action.id,
				name: product.title,
				price: product.price,
				quantity: 1,
			});
		}

		return {
			...state,
			items: updatedItems,
		}
	}

	if (action.type === 'UPDATE_ITEM') {
		const updatedItems = [...state.items];
		const updatedItemIndex = updatedItems.findIndex(
			(item) => item.id === action.productId
		);

		const updatedItem = {
			...updatedItems[updatedItemIndex],
		};

		updatedItem.quantity += action.amount;

		if (updatedItem.quantity <= 0) {
			updatedItems.splice(updatedItemIndex, 1);
		} else {
			updatedItems[updatedItemIndex] = updatedItem;
		}

		return {
			...state,
			items: updatedItems,
		};
	}
};

export default function ShoppingCarProvider({children}) {
	const [shoppingCartState, setShoppingCartDispatch] = useReducer(
		shoppingCartReducer,
		{items: []}
	);

	function handleAddItemToCart(id) {
		setShoppingCartDispatch({
			type: "ADD_ITEM",
			id: id
		});
	}


	function handleUpdateCartItemQuantity(productId, amount) {
		setShoppingCartDispatch({
			type: "UPDATE_ITEM",
			productId: productId,
			amount: amount
		});
	}

	const ctxValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity
	};

	return (
		<ShoppingCartContext.Provider value={ctxValue}>
			{children}
		</ShoppingCartContext.Provider>
	)
}
