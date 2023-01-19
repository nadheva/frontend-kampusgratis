import axios from "axios";
import { getAuth } from "firebase/auth";

const API_URL = "https://kg-2-luk-s7dsgbuasq-et.a.run.app/api/v1/";

const getAllDiscussion = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + "forum/discussionforum/global",
		config
	);

	return response.data;
};

const getDiscussionDetail = async (discussionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(
		API_URL + `forum/discussionforum/allcontent/${discussionId}`,
		config
	);

	return response.data;
};

const likeDiscussion = async (discussionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(
		API_URL + `forum/like?type=df&id=${discussionId}`,
		{},
		config
	);

	return response.data;
};

const likeComment = async (commentId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(
		API_URL + `forum/like?type=comment&id=${commentId}`,
		{},
		config
	);

	return response.data;
};

const likeReply = async (replyId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.put(
		API_URL + `forum/like?type=reply&id=${replyId}`,
		{},
		config
	);

	return response.data;
};

const sendComment = async (discussionId, comment) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(
		API_URL + `forum/comment/create`,
		{
			df_id: discussionId,
			content: comment,
		},
		config
	);

	return response.data;
};

const deleteComment = async (commentId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(
		API_URL + `forum/comment/delete/${commentId}`,
		config
	);

	return response.data;
};

const deleteReply = async (replyId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(
		API_URL + `forum/reply/delete/${replyId}`,
		config
	);

	return response.data;
};

const deleteDiscussion = async (discussionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(
		API_URL + `forum/discussionforum/delete/${discussionId}`,
		config
	);

	return response.data;
};

const createDiscussion = async (title, content) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	console.log(title, content);

	const response = await axios.post(
		API_URL + "forum/discussionforum/create",
		{
			title,
			content,
			session_id: null,
		},
		config
	);

	return response.data;
};

const discussionGlobalService = {
	getAllDiscussion,
	getDiscussionDetail,
	likeDiscussion,
	likeComment,
	likeReply,
	sendComment,
	deleteComment,
	deleteReply,
	createDiscussion,
	deleteDiscussion,
};

export default discussionGlobalService;
