import { ADD_USER, AUTH_ERROR, LOGIN, LOGOUT, FORGOT_PASSWORD } from "../../actions/AuthAction";

const initialState = {
  addUserResult: false,
  addUserLoading: false,
  addUserError: false,

  forgotPasswordResult: false,
  forgotPasswordLoading: false,
  forgotPasswordError: false,

  isAuthenticated: !!localStorage.getItem("token"),
  isAuthenticatedLoading: false,
  accessToken: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        addUserResult: action.payload.data,
        addUserLoading: action.payload.loading,
        addUserError: action.payload.errorMessage,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordResult: action.payload.data,
        forgotPasswordLoading: action.payload.loading,
        forgotPasswordError: action.payload.errorMessage,
      };
    case LOGIN:
      localStorage.setItem("token", action.payload.data);
      localStorage.setItem("user", JSON.stringify(action.user));

      document.querySelector("body").style.overflow = "auto";

      return {
        ...state,
        isAuthenticated: action.payload.data,
        isAuthenticatedLoading: action.payload.loading,
        accessToken: action.payload.data,
        user: action.user,
        error: null,
      };


    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      document.querySelector("body").style.overflow = "auto";

      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        error: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AuthReducer;
