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
      <link rel="stylesheet" type="text/css" href="http://localhost:3000/assets/vendor/font-awesome/css/all.min.css" />
      <link rel="stylesheet" type="text/css" href="http://localhost:3000/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
      <link rel="stylesheet" type="text/css" href="http://localhost:3000/assets/vendor/choices/css/choices.min.css" />
      <link id="style-switch" rel="stylesheet" type="text/css" href="http://localhost:3000/assets/css/style.css" />


      <script type="text/javascript" src="http://localhost:3000/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>
      <script type="text/javascript" src="http://localhost:3000/assets/vendor/choices/js/choices.min.js" defer></script>
      <script type="text/javascript" src="http://localhost:3000/assets/js/functions.js" defer></script>
    </Helmet>
  </Provider>
);

// console.log = () => { };