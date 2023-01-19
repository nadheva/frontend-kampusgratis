import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../helpers/useEffectOnce";
import moment from "moment/moment";

import {
	getAllDiscussion,
	likeDiscussion,
	resetAll,
	deleteDiscussion,
} from "../../features/discussion-global/discussionGlobalSlice";
import { toast } from "react-toastify";

const MainContent = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const [discussions, setDiscussions] = useState([]);
	const [showCommentBox, setShowCommentBox] = useState(false);

	const { data, message } = useSelector((state) => state.discussionGlobal);

	const { user } = useSelector((state) => state.profile);

	useEffectOnce(() => {
		dispatch(resetAll());
		dispatch(getAllDiscussion());
	});

	useEffect(() => {
		if (message === "DELETE_DISCUSSION") {
			dispatch(resetAll());
			dispatch(getAllDiscussion());
		}

		if (Object.values(data).length !== 0) {
			if (data?.discussions?.data) setDiscussions(data.discussions.data);

			if (data?.discussion)
				setDiscussions((prevState) => {
					let dataPrev = [...prevState];
					let index = dataPrev.findIndex(
						(discussion) => discussion.id === data.discussion.id
					);

					dataPrev[index] = {
						...dataPrev[index],
						student_like: data.discussion.student_like,
					};

					return dataPrev;
				});
		}
	}, [data]);

	async function copyTextToClipboard(textToCopy) {
		try {
			await navigator.clipboard.writeText(textToCopy);
			toast.info("Diskusi berhasil disalin.");
		} catch (error) {
			toast.error("Gagal untuk membagikan diskusi.");
		}
	}

	const doLikeDiscussion = async (discussionId) => {
		dispatch(likeDiscussion(discussionId));
	};

	const doFilter = async () => {};

	const doDeleteDiscussion = async (discussionId) => {
		dispatch(deleteDiscussion(discussionId));
	};

	const doShare = async (discussionTitle, discussionsId) => {
		await copyTextToClipboard(
			`Diskusi ${discussionTitle}. URL Halaman: ${window.location}/diskusi/${discussionsId}`
		);
	};

	return (
		<>
			<div className="container my-2">
				<section className="pb-4">
					<div className="row position-relative">
						<div className="col-lg-10">
							<form className="bg-body shadow rounded p-2" onSubmit={doFilter}>
								<div className="input-group">
									<input
										className="form-control border-0 me-1"
										type="search"
										onChange={(e) => setSearch(e.target.value)}
										placeholder="Cari Diskusi"
									/>
									<button
										type="submit"
										className="btn btn-primary mb-0 rounded"
									>
										<i className="fas fa-search"></i>
									</button>
								</div>
							</form>
						</div>
						<div className="col-lg-2 p-2">
							<Link
								className="btn btn-primary"
								to="/diskusi-global/buat-diskusi"
							>
								Buat Diskusi Baru
							</Link>
						</div>
					</div>
				</section>
				{discussions.length > 0 ? (
					<>
						{discussions.map((discussion, key) => (
							<>
								<div className="card shadow h-100 mt-1 mb-4">
									<div className="card-body">
										<div className="list-unstyled mb-0">
											<div className="comment-item">
												<div className="d-flex mb-3">
													<div className="avatar avatar-sm flex-shrink-0">
														<img
															className="avatar-img rounded-circle"
															src={
																discussion?.User?.display_picture_link ==
																undefined
																	? user.display_picture_link
																	: discussion?.User?.display_picture_link ==
																	  null
																	? "/assets/images/avatar/empty-display-picture.png"
																	: discussion?.User?.display_picture_link
															}
															alt=""
														/>
													</div>
													<div className="ms-2 w-100">
														<h6 className="mb-0">
															{discussion?.User?.full_name == undefined
																? user.full_name
																: discussion?.User?.full_name}
														</h6>
														<small>
															{new Date(discussion.created_at).toLocaleString(
																"id-ID"
															)}
															{/* {discussion.created_at.split("T")[0].split("-").reverse().join("/")} - {discussion.created_at.split("T")[1].split(".")[0]} */}
														</small>
													</div>
													{discussion?.User?.display_picture_link ===
														user.display_picture_link && (
														<>
															<div className="dropdown">
																<span
																	className="btn btn-xs btn-round mx-1"
																	type="button"
																	data-bs-toggle="dropdown"
																	aria-expanded="true"
																>
																	X
																</span>
																<ul className="dropdown-menu">
																	<li>
																		<button
																			className="dropdown-item"
																			type="submit"
																			onClick={() =>
																				doDeleteDiscussion(discussion.id)
																			}
																		>
																			Hapus Diskusi
																		</button>
																	</li>
																</ul>
															</div>
														</>
													)}
												</div>
												<Link to={`/diskusi-global/diskusi/${discussion.id}`}>
													<h5>{discussion.title}</h5>
												</Link>
												<p className="mb-2 text-dark">{discussion.content}</p>
												<div className="d-flex mt-3 justify-content-between">
													<button
														className="btn btn-sm w-50 py-2 border"
														onClick={() => doLikeDiscussion(discussion.id)}
													>
														<i
															className={`bi ${
																!discussion.isLiked
																	? "bi-hand-thumbs-up-fill text-dark"
																	: "bi-hand-thumbs-up"
															} text-center me-1`}
														></i>
														{discussion.teacher_like.length +
															discussion.student_like.length}{" "}
														Penyuka
													</button>
													<Link
														className={`btn btn-sm w-50 py-2 border ms-2`}
														to={`diskusi/${discussion.id}`}
													>
														<i
															className={`fa fa-solid fa-comment text-center text-dark me-2`}
														></i>
														{discussion.Comments} Komentar
													</Link>
													<button
														className="btn btn-sm w-50 py-2 border ms-2"
														onClick={() =>
															doShare(discussion.title, discussion.id)
														}
													>
														<i className="fa fa-sold fa-share-alt text-center text-dark me-2"></i>
														Bagikan Diskusi
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						))}
					</>
				) : (
					<>...</>
				)}
			</div>
		</>
	);
};

export default MainContent;
