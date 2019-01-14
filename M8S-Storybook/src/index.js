
/*
    src/index.js
    application entry point
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// global styles
import './index.css';

// app component
import App from './components/App';

// service worker will cache resources in production
//  allowing the app to load faster and enabling offline capabilities
import * as serviceWorker from './serviceWorker';

// render components
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
