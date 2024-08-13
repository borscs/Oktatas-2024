import {Link, useLoaderData} from 'react-router-dom';
import {useEffect, useState} from "react";
import Events from "./Events";
import EventsList from "../components/EventsList";
import {json} from "react-router";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event',
  },
  {
    id: 'e2',
    title: 'Another event',
  },
];

 function EventsPage() {
	const events = useLoaderData();
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState();
	// const [fetchedEvents, setFetchedEvents] = useState();
	//
	// useEffect(() => {
	// 	async function fetchevent() {
	// 		setIsLoading(true);
	//
	// 		const response = await fetch('http://localhost:8080/events');
	//
	// 		if(!response.ok){
	// 			setError('Loading faild');
	// 		}else{
	// 			 setFetchedEvents((await response.json()).events);
	// 		}
	// 		setIsLoading(false);
	// 	}
	// 	fetchevent();
	// }, []);

  // return (
  //   <>
  //     <h1>EventsPage</h1>
	// 	{isLoading && <p>Loading...</p>}
	// 	{error && <p>{error}</p>}
  //     <ul>
	// 	  {!isLoading &&fetchedEvents && <EventsList events={fetchedEvents}/>}
  //     </ul>
  //   </>
  // );

	return <EventsList events={events.events}/>
}

export  async function eventLoader() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		//return { isError: true, message: 'Could not fetch events.' };
		// throw  new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
		// 	status: 500,
		// })
		throw json(
			{ message: 'Could not fetch events.' },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
}
export default EventsPage;
