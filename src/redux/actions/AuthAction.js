import axios from "axios";

export const ADD_USER = "ADD_USER";

// add
export const addUser = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "https://62b2d81c4f851f87f44e0d48.mockapi.io/user",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          // get data
          type: ADD_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // error
        dispatch({
          type: ADD_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
