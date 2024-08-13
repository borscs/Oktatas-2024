import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
	const counter = useSelector(state => state.counter.counter);
	const showCounter = useSelector(state => state.counter.showCounter);

	const dispatch = useDispatch();


	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment())
	};

	const incrementWith10Handler = () => {
		dispatch(counterActions.increase(10));
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>+</button>
				<button onClick={incrementWith10Handler}>+10</button>
				<button onClick={decrement}>-</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
