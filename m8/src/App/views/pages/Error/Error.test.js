
/*
  src/App/views/pages/Error/Error.test.js
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// error page component
import Error from './Error';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});
