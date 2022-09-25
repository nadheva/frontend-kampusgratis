import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from "react-helmet";

import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Helmet>
      {/* <!-- Bootstrap JS --> */}
      <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>

      {/* <!-- Vendors --> */}
      {/* <script src="assets/vendor/stepper/js/bs-stepper.min.js" defer></script> */}

      {/* <!-- Template Functions --> */}
      <script src="assets/js/functions.js" defer></script>
    </Helmet>
  </Provider>
);