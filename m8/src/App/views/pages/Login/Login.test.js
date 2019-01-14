
/*
  src/App/views/pages/Login/Login.test.js
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// Login page component
import Login from './Login';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
