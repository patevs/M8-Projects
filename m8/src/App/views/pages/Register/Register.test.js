
/*
  src/App/views/pages/Register/Register.test.js
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// Register page component
import Register from './Register';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});
