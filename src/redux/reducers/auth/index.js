import { ADD_USER } from "../../actions/AuthAction";

const initialState = {
  addUserResult: false,
  addUserLoading: false,
  addUserError: false,
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
    default:
      return state;
  }
};

export default AuthReducer;
