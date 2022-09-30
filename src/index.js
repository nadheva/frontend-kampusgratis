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
      <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>
      <script src="assets/vendor/choices/js/choices.min.js" defer></script>
      <script src="assets/js/functions.js" defer></script>
    </Helmet>
  </Provider>
);

// console.log = () => { };