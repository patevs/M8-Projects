
/*
    src/components/Landing/Landing.test.js
*/

// imports
import React from 'react';
import ReactDOM from 'react-dom';

// landing page component
import Landing from './';

// test cases
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
