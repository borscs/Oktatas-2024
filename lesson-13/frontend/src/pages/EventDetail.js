import { useRouteLoaderData} from 'react-router-dom';
import {json} from "react-router";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const params =  useRouteLoaderData('event-detail');
  return <EventItem event={params.event}/>
}

export default EventDetailPage;

export async function eventDetailLoader({request, params}){
	const id = params.eventId;

	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json({message: 'Could not fetch details for selected event.'}, {
			status: 500
		})
	} else {
		return response;
	}
}
