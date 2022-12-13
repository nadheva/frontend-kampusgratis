import React, { useEffect, useState } from "react";
// import { generateDemoEvents } from "../../helpers/generateDemoEvents";
// import { DateTime } from "luxon";
import Kalend, { CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";


import { useSelector, useDispatch } from "react-redux";
import { getCalender } from "../../features/calender/calenderSlice";
import useEffectOnce from "../../helpers/useEffectOnce";

import Header from "../../components/default/Header";
import Footer from "../../components/default/Footer";

const Calendar = (props) => {

	const [demoEvents, setDemoEvents] = useState([]);

	const dispatch = useDispatch();

	const { data, isLoading } = useSelector((state) => state.calender);

	useEffectOnce(() => {
		dispatch(getCalender());
	});

	// Create and load demo events
	useEffect(() => {
		// setDemoEvents(generateDemoEvents(DateTime.now(), 80));
		// setDemoEvents(datax)
		if (data?.calender) setDemoEvents(JSON.parse(JSON.stringify(data?.calender)));
	}, [data]);

	console.log(demoEvents)

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
			{
				isLoading ? (
					<section className="py-0 py-sm-5">
						<div
							className="container text-center"
							style={{ marginTop: "178px", marginBottom: "178px" }}>
							<div className="row">
								<div className="col-12">
									<div className="spinner-border" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				) : (
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
				)
			}
			<Footer />
		</>
	);
};

export default Calendar;
