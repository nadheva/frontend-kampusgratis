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
			<main>
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
						<section className="my-3">
							<div className="container">
								<div className="shadow rounded-3 p-2" >
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
										language={'en'}
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
								</div>
								<ul className="list-inline hstack flex-wrap gap-3 mb-0 justify-content-center mt-4">
									<li className="list-inline-item">
										<a className="" href="#" style={{ color: "#9747FF" }}>
											<i className="bi bi-circle-fill" /> Acara Kampus
										</a>
									</li>
									<li className="list-inline-item">
										<a className="text-success" href="#">
											<i className="bi bi-circle-fill" /> UAS
										</a>
									</li>
									<li className="list-inline-item">
										<a className="text-warning" href="#">
											<i className="bi bi-circle-fill" /> Tugas
										</a>
									</li>
									<li className="list-inline-item">
										<a className="text-danger" href="#">
											<i className="bi bi-circle-fill" /> UTS
										</a>
									</li>
									<li className="list-inline-item">
										<a className="" href="#" style={{ color: "#106FA4" }}>
											<i className="bi bi-circle-fill" /> Jadwal Simulasi
										</a>
									</li>
								</ul>
							</div>
						</section>

					)
				}
			</main>
			<Footer />
		</>
	);
};

export default Calendar;
