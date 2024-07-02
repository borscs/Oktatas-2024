
export default function TabButton({children, handleSelected, isSelected}) {

	// function handlerClick(){
	// 	console.log('Hello Word');
	// 	handleClick();
	// }
	return (
		<li>
			{/*<button onClick={handlerClick}>{children}</button>*/}
			<button onClick={() => handleSelected(children)} className={isSelected ? 'active' : undefined}>{children}</button>
		</li>
	)
}
