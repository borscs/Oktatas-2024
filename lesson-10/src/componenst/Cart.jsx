import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import useProgressContext from "../store/UseProgressContext.jsx";
import Modal from "./UI/Modal..jsx";
import CartItem from "./CartItem.jsx";
import Button from "./UI/Button.jsx";

export default function Cart(){
	const cartCtx = useContext(CartContext);
	const useProgressCtx = useContext(useProgressContext);

	const totalPrice = cartCtx.items.reduce((sum, item) => {
		return sum + item.quantity * item.price;
	}, 0);

	function handlerCloseCart(){
		useProgressCtx.hideCart();
	}

	console.log(useProgressCtx.progress);

	return(
		<Modal className={"cart"} open={useProgressCtx.progress === 'cart'}>
			<h2>YOUR CART</h2>
			<ul>
				{cartCtx.items.map((item, index) => (
					<CartItem
						key={index}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onDecrease={() => cartCtx.removeItem(item.id)}
						onIncrease={() => cartCtx.addItem(item)}
					/>
				))}
				<p className={"cart-total"}>{totalPrice}</p>
				<p className={"modal-actions"}>
					<Button onClick={handlerCloseCart} textOnly>Close</Button>
					<Button onClick={handlerCloseCart}>Go to Checkout</Button>
				</p>
			</ul>
		</Modal>
	)
};
