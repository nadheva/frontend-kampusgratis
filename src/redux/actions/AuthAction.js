import axios from "axios";
import Swal from "sweetalert2";

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
      url: "https://testing-kampusg.herokuapp.com/api/v1/auth/register",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          // get data
          type: ADD_USER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        window.location.href = "/login";
      })
      .catch((error) => {
        // error
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Registration Failed ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
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
