import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

// import Header from './component/header/Header';
// import Footer from './component/foooter/Footer';

import Routed from './config/Routed';

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
          <>
              <Routed/>
          </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
