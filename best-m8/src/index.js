
/*
  src/index.js
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import './index.css';

import * as serviceWorker from './serviceWorker';

// app components
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

/*
// import react-loadable lib
import Loadable from 'react-loadable';

// Loading component
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
*/

// render components
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
