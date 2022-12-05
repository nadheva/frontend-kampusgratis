import axios from 'axios';
import { getAuth } from 'firebase/auth';

const API_URL = "https://kg-be-o5doicnv2a-et.a.run.app/api/v1/";

const getMySubjects = async (currentPage, search) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `subject/enrolledsubjects?page=${currentPage}&limit=6&search=${search}`, config);

	return response.data;
}

const getSubject = async (subjectId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `subject/${subjectId}`, config);

	return response.data;
}

const getQuizBySession = async (sessionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `quiz/desc/session/${sessionId}`, config);

	return response.data;
}

const getCurrentQuizzes = async () => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `quiz/current`, config);

	return response.data;
}

const getQuestions = async (materialId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `quiz/continue/${materialId}`, config);

	return response.data;
}

const submitQuiz = async (answers, quizId, materialEnrolledId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL + `quiz/submit`, {
		answer: answers,
		quiz_id: quizId,
		material_enrolled_id: materialEnrolledId,
		duration_taken: 1
	}, config);

	return response.data;
}

const startQuiz = async (quizId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL + `quiz/take/${quizId}`, {}, config);

	return response.data;
}

const getSessions = async (subjectId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `session/getfromsub/${subjectId}`, config);

	return response.data;
}

const getDiscussions = async (sessionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `forum/discussionforum/session/${sessionId}`, config);

	return response.data;
}

const getSingleDiscussion = async (discussionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `forum/discussionforum/allcontent/${discussionId}`, config);

	return response.data;
}

const finishModule = async (moduleId, text) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL + `module/finish`, {
		'module_id': moduleId,
		'takeaway': text
	}, config);

	return response.data;
}

const getModuleBySession = async (sessionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `module/session/${sessionId}`, config);

	return response.data;
}

const getVideo = async (videoId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `module/video/${videoId}`, config);

	return response.data;
}

const getDocument = async (documentId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `module/document/${documentId}`, config);

	return response.data;
}

const getSingleModule = async (moduleId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.get(API_URL + `module/${moduleId}`, config);

	return response.data;
}

const sendComment = async (discussionId, comment) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL + `forum/comment/create`, {
		"df_id": discussionId,
		"content": comment
	}, config);

	return response.data;
}

const sendReply = async (commentId, reply) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.post(API_URL + `forum/reply/create`, {
		"comment_id": commentId,
		"content": reply
	}, config);

	return response.data;
}

const deleteComment = async (commentId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.delete(API_URL + `forum/comment/delete/${commentId}`, config);

	return response.data;
}

const deleteReply = async (replyId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.delete(API_URL + `forum/reply/delete/${replyId}`, config);

	return response.data;
}

const likeDiscussion = async (discussionId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.put(API_URL + `forum/like?type=df&id=${discussionId}`, {}, config);

	return response.data;
}

const likeComment = async (commentId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.put(API_URL + `forum/like?type=comment&id=${commentId}`, {}, config);

	return response.data;
}

const likeReply = async (replyId) => {
	const auth = getAuth();
	const token = await auth.currentUser.getIdToken();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	const response = await axios.put(API_URL + `forum/like?type=reply&id=${replyId}`, {}, config);

	return response.data;
}

const myStudyService = {
	getMySubjects, getSubject, getSessions, getModuleBySession, getSingleModule,
	getVideo, getDocument, getDiscussions, getSingleDiscussion,
	finishModule,
	sendComment, sendReply, deleteComment, deleteReply,
	likeDiscussion, likeComment, likeReply,
	getQuizBySession, startQuiz, getCurrentQuizzes, submitQuiz, getQuestions
}

export default myStudyService;