
/*
  src/App/views/pages/Error/Error.js
*/

// import react component lib
import React, { Component } from 'react';

// Error page component class
class Error extends Component {
  render() {
    return (
      <div className="Error">
        <p> --- ERROR PAGE --- </p>
        <div>
          <p>
            <span> 404 Error; The page you are looking for does not exist </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
