
/*
  src/App/views/components/Footer.js
*/

// import react component lib
import React, { Component } from 'react';
// import evergreen-ui component libs
import { Heading, majorScale, Pane } from 'evergreen-ui'

// Footer component class
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Pane
          background="tint1"
          border="default"
          marginTop={majorScale(10)}
        >
          <Heading
            size={400}
            className="text-muted"
            marginTop={majorScale(1)}
            marginBottom={majorScale(1)}
          >
            Patrick Evans
          </Heading>
          <Heading
            size={300}
            className="text-muted"
            marginTop={majorScale(1)}
            marginBottom={majorScale(1)}
          >
            2018
          </Heading>
        </Pane>
      </div>
    );
  }
}

export default Footer;
