import {useEffect, useState} from "react";

export default function ProgresBar ({timer}) {
	const [reanimatedTime, setReanimatedTime] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("INTERVAL");
			setReanimatedTime((prevTime) => prevTime-10);
		}, 10);

		return () => {
			clearInterval(interval);
		}
	}, []);

	return(
		<progress value={reanimatedTime} max={timer}></progress>
	);
}
