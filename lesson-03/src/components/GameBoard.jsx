import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelected, activePlayerSymbol }) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handlerSelectedGamePad(rowIndex, colIndex){
		setGameBoard((playerGameBoard) => {
			const updatedBoard = [...playerGameBoard.map(inner => [...inner])];
			updatedBoard[rowIndex][colIndex] =  activePlayerSymbol;
			return updatedBoard;
		});
		onSelected();
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handlerSelectedGamePad(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}
