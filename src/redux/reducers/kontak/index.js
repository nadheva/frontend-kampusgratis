import {
  GET_LIST_KONTAK,
} from "../../actions/KontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,
};

const KontakReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default KontakReducer;
