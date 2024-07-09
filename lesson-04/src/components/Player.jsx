import {useRef, useState} from "react";

export default function Player() {

	const [enteredPlayer, setEnteredPlayer] = useState(null);
	// const [submitted, setSubmitted] = useState(false);
	const playerName = useRef();

	function handlerChange(event) {
		// setSubmitted(false);
		setEnteredPlayer(event.target.value);
	}

	function handlerClick(){
		setEnteredPlayer(playerName.current.value);
		playerName.current.value = '';
		console.log(playerName.current);
	}

	return (
		<section id="player">
			<h2>Welcome { enteredPlayer ?? 'unknown entity'}</h2>
			<p>
				{/*<input type="text" onChange={handlerChange} value={enteredPlayer}/>*/}
				<input type="text" ref={playerName}/>
				<button onClick={handlerClick}>Set Name</button>
			</p>
		</section>
	);
}
