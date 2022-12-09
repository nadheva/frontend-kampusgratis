import React, { useEffect, useState } from "react";
import { generateDemoEvents } from "../../helpers/generateDemoEvents";
import { DateTime } from "luxon";
import Kalend, { CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const Calendar = (props) => {

	const events = [
		{
			id: 1,
			allDay: false,
			color: "red",
			endAt: "2022-12-09T01:00:11.383Z",
			startAt: "2022-12-09T23:30:11.383Z",
			summary: "Sasuke kennis"
		},
		{
			id: "9ab50366-fc18-40aa-81a9-8053955ef49c",
			allDay: false,
			color: "dodgerblue",
			endAt: "2022-12-07T01:00:11.383Z",
			startAt: "2022-12-06T23:30:11.383Z",
			summary: "Electronics"
		},
		{
			id: 2,
			allDay: false,
			color: "blue",
			endAt: "2022-12-18T02:44:11.087Z",
			startAt: "2022-12-18T01:44:11.087Z",
			summary: "Intermediate Accounting I Session no. 1, ASSIGNMENT",
		},
	]

	const [demoEvents, setDemoEvents] = useState([]);

	// Create and load demo events
	useEffect(() => {
		// setDemoEvents(generateDemoEvents(DateTime.now(), 80));
		setDemoEvents(events)
	}, []);

	const onNewEventClick = (data) => {
		const msg = `New event click action\n\n Callback data:\n\n${JSON.stringify({
			hour: data.hour,
			day: data.day,
			startAt: data.startAt,
			endAt: data.endAt,
			view: data.view,
			event: "click event ",
		})}`;
		// console.log(msg);
	};

	// Callback for event click
	const onEventClick = (data) => {
		const msg = `Click on event action\n\n Callback data:\n\n${JSON.stringify(
			data
		)}`;
	};

	// Callback after dragging is finished
	const onEventDragFinish = (prev, current, data) => {
		setDemoEvents(data);
	};

	return (
		<>
			<Header />
			<Kalend
				kalendRef={props.kalendRef}
				onNewEventClick={onNewEventClick}
				initialView={CalendarView.WEEK}
				disabledViews={[]}
				onEventClick={onEventClick}
				events={demoEvents}
				initialDate={new Date().toISOString()}
				hourHeight={60}
				// showWeekNumbers={true}

				// draggingDisabledConditions={{
				//   summary: 'Computers',
				//   allDay: false,
				//   color: 'pink',
				// }}
				onEventDragFinish={onEventDragFinish}
				onStateChange={props.onStateChange}
				selectedView={props.selectedView}
				showTimeLine={true}
				isDark={false}
				autoScroll={true}
			// disabledDragging={true}
			// colors={{
			// 	light: {
			// 		primaryColor: 'blue',
			// 	},
			// 	dark: {
			// 		primaryColor: 'orange',
			// 	},
			// }}
			/>
			<Footer />
		</>
	);
};

export default Calendar;
