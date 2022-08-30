import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";

// view
export const getListKontak = () => {
  //   console.log("2. Masuk ke action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://62b2d81c4f851f87f44e0d48.mockapi.io/kontak",
      timeout: 120000,
    })
      .then((response) => {
        // console.log("3. berhasil data dapet :", response.data);
        dispatch({
          // get data
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // error
        // console.log("3. Gagal akses data");
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// add
export const addKontak = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "https://62b2d81c4f851f87f44e0d48.mockapi.io/kontak",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        dispatch({
          // get data
          type: ADD_KONTAK,
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
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
