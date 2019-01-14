
/*
  src/App.test.js
  test cases for App component
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// app component
import App from './App';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
