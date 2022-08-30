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
      url: "http://2c1e-182-253-248-23.ngrok.io/api/v1/auth/register",
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
