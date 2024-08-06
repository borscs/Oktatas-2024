import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";

export default function Meals(){
	const [loadMeals, setLoadMeals] = useState([]);

	useEffect(() => {
		async function fetchMeals(){
			const response = await fetch('http://localhost:3000/meals');
			if(!response.ok){
				return;
			}
			const data = await response.json();
			console.log(data);
			setLoadMeals(data);
		}
		fetchMeals();
	}, []);

	return (
		<ul id={"meals"}>
			{loadMeals.map((meal, index) => (
				<MealItem key={index} meal={meal}/>
			))}
		</ul>
	)
}
