export function extractErrorMessage(error) {
	return error.response?.data?.message || error.message || error.toString();
}

export function extartErrorFirebase(error) {
	let errors = { ...error };

	errors.message = error.message;

	switch (errors.code) {
		case "ERR_BAD_REQUEST": {
			const message = error?.response?.data?.message || "Something went wrong.";
			errors.message = message;
			break;
		}
		case 401: {
			const message = "Invalid authorization.";
			errors.message = message;
			break;
		}
		case "auth/invalid-email": {
			const message = "Invalid combination Email address and Password.";
			errors.message = message;
			break;
		}
		case "auth/id-token-expired": {
			const message = "Invalid authorization.";
			errors.message = message;
			break;
		}
		case "auth/wrong-password": {
			const message = "Invalid combination Email address and Password.";
			errors.message = message;
			break;
		}
		case "auth/user-not-found": {
			const message = "Invalid combination Email address and Password.";
			errors.message = message;
			break;
		}
		case "auth/email-already-in-use": {
			const message = "This email already used by another account.";
			errors.message = message;
			break;
		}
		case "auth/popup-closed-by-user": {
			const message = "Login canceled.";
			errors.message = message;
			break;
		}
		case "auth/internal-error": {
			const message = "Something went wrong.";
			errors.message = message;
			break;
		}
	}

	return errors.message;
}
