import React, { useEffect, useState } from "react";
import { generateDemoEvents } from "../../helpers/generateDemoEvents";
import { DateTime } from "luxon";
import Kalend, { CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";

import Header from "../default/Header";
import Footer from "../default/Footer";

const Calendar = (props) => {
	const [demoEvents, setDemoEvents] = useState([]);

	// Create and load demo events
	useEffect(() => {
		setDemoEvents(generateDemoEvents(DateTime.now(), 80));
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
		// console.log(msg);
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
				//   light: {
				//     primaryColor: 'blue',
				//   },
				//   dark: {
				//     primaryColor: 'orange',
				//   },
				// }}
			/>
			<Footer />
		</>
	);
};

export default Calendar;
