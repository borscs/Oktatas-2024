import logoImg from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import useProgressContext from "../store/UseProgressContext.jsx";

export default function Header(){
	const cartCtx = useContext(CartContext);
	const useProgressCtx = useContext(useProgressContext);


	const totalCartItems = cartCtx.items.reduce((sum, item) => {
		return sum + item.quantity;
	}, 0);

	function handlerShowCart(){
		useProgressCtx.showCart();
	}

	return(
		<header id="main-header">
			<div id="title">
				<img src={logoImg} alt={"A restaurant"}/>
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly onClick={handlerShowCart}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
}
