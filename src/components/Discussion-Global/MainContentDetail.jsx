import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../helpers/useEffectOnce";
import moment from "moment/moment";

import {
	getDiscussionDetail,
	likeDiscussion,
	reset,
	resetAll,
	sendComment,
} from "../../features/discussion-global/discussionGlobalSlice";
import { Link, useParams } from "react-router-dom";

import { reset as resetMyStudy } from "../../features/my-study/myStudySlice";

import ForumComment from "../../components/Discussion-Global/Discussion";
import { toast } from "react-toastify";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MainContent = () => {
	const dispatch = useDispatch();
	const [discussion, setDiscussion] = useState({});

	const { discussionId } = useParams();
	const [showCommentBox, setShowCommentBox] = useState(false);

	const [myComment, setMyComment] = useState("");

	const { data, message, isSuccess } = useSelector(
		(state) => state.discussionGlobal
	);

	const { data: dataForum, message: messageForum } = useSelector(
		(state) => state.myStudy
	);

	const { user } = useSelector((state) => state.profile);

	useEffectOnce(() => {
		dispatch(resetAll());
		setDiscussion({});
		dispatch(getDiscussionDetail(discussionId));
	});

	useEffect(() => {
		if (messageForum) {
			switch (messageForum) {
				case "SENT_REPLY": {
					dispatch(getDiscussionDetail(discussionId));
					dispatch(resetMyStudy());
					break;
				}
				case "LIKE_REPLY": {
					dispatch(getDiscussionDetail(discussionId));
					dispatch(resetMyStudy());
					break;
				}
				case "LIKE_COMMENT": {
					dispatch(getDiscussionDetail(discussionId));
					dispatch(resetMyStudy());
					break;
				}
			}
		}

		if (Object.values(data).length !== 0) {
			if (data?.discussion_insert && message === "SENT_COMMENT") {
				// setDiscussion(prevState => {
				//   let discussionData = prevState;

				//   return {
				//     ...prevState,
				//     Comments: [data.discussion_insert, ...discussionData.Comments]
				//   };
				// });
				// setDiscussion({});
				dispatch(getDiscussionDetail(discussionId));
				dispatch(reset());
			} else if (message) {
				if (data?.discussion?.data && message === "GET_DISCUSSION")
					setDiscussion(data.discussion.data);
				if (message === "LIKE_DISCUSSION")
					setDiscussion((prevState) => {
						return {
							...prevState,
							student_like: data?.discussion?.student_like,
						};
					});

				// dispatch(reset());
			}
		}
	}, [data, discussion, messageForum]);

	const addComment = async () => {
		if (myComment.length === 0) return toast.warning("Balasan masih kosong!");

		dispatch(sendComment({ discussionId, comment: myComment }));
		setMyComment("");
	};

	const doLikeDiscussion = async (discussionId) => {
		dispatch(likeDiscussion(discussionId));
	};

	return (
		<>
			<div className="bg-light p-4 text-center rounded-3">
				<section className="py-4">
					<div className="row">
						<div className="col-12">
							<h1 className="m-0">{discussion?.title || "..."}</h1>
							<div className="d-flex justify-content-center">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-dots mb-0">
										<li className="breadcrumb-item">
											<Link to="/kategori">Fitur</Link>
										</li>
										<li className="breadcrumb-item">
											<Link to="/diskusi-global">Diskusi Global</Link>
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Detail Diskusi
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="container my-5">
				{Object.keys(discussion).length !== 0 ? (
					<>
						<div className="card shadow h-100 mt-3">
							<div className="card-body">
								<div className="vstack gap-3">
									<div>
										<div className="d-sm-flex justify-content-sm-between mb-3">
											<div className="d-flex align-items-center">
												<div className="avatar mb-2 mb-md-0 me-1 border-2">
													<img
														loading="lazy"
														src={
															discussion.User.display_picture_link
																? discussion.User.display_picture_link
																: "/assets/images/avatar/empty-display-picture.png"
														}
														className="avatar-img rounded-circle shadow"
														alt={discussion.User.full_name}
													/>
												</div>
												<div className="ms-3">
													<h6 className="mb-0">{discussion.User.full_name}</h6>
													<small>
														dikirim pada{" "}
														{moment(discussion?.created_at).format("LL")}
													</small>
												</div>
											</div>
										</div>
										<h5>{discussion.title}</h5>
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
													} text-center`}
												></i>
												&nbsp;
												{discussion.teacher_like.length +
													discussion.student_like.length}{" "}
												Penyuka
											</button>
											<button
												className={`btn btn-sm w-50 py-2 border ms-2`}
												onClick={() =>
													setShowCommentBox(showCommentBox ? false : true)
												}
											>
												<i
													className={`fa fa-solid ${
														showCommentBox ? "fa-comment-slash" : "fa-comment"
													} text-center text-dark`}
												></i>
												&nbsp;
												{showCommentBox ? "Tutup Komentar" : "Tambah Komentar"}
											</button>
										</div>
									</div>
									<hr />
									<div className="col-12 mt-2">
										<div
											className={`d-flex mb-4 ${
												showCommentBox ? "d-block" : "d-none"
											}`}
										>
											<div className="avatar avatar-sm flex-shrink-0 me-2">
												<a href=" ">
													<img
														className="avatar-img rounded-circle"
														src={
															user?.display_picture_link != null
																? `${user?.display_picture_link}`
																: "/assets/images/avatar/empty-display-picture.png"
														}
														alt={user?.full_name}
													/>
												</a>
											</div>
											<form className="w-100 d-flex">
												<textarea
													className="one form-control pe-4 bg-light"
													id="autoheighttextarea"
													rows="1"
													placeholder="Tambah komentar ..."
													onChange={(e) => setMyComment(e.target.value)}
													value={myComment}
													autoFocus
												></textarea>
												<button
													className="btn btn-primary ms-2 mb-0"
													type="button"
													onClick={() => addComment()}
												>
													Kirim
												</button>
											</form>
										</div>
										{discussion.Comments.length === 0 && (
											<>
												<div className="alert alert-info">
													Belum ada balasan atau komentar pada diskusi ini.
												</div>
											</>
										)}
										{discussion.Comments.map((comment, key) => (
											<>
												<ForumComment comment={comment} key={key} />
											</>
										))}
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<>...</>
				)}
			</div>
		</>
	);
};

export default MainContent;
