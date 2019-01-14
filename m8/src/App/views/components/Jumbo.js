
/*
  src/App/views/components/Jumbo.js
*/

// import react component lib
import React, { Component } from 'react';
// import evergreen-ui component libs
import { Heading, majorScale } from 'evergreen-ui'
// import reactstrap component libs
import { Container, Jumbotron } from 'reactstrap';

// Jumbo component class
class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
        <Jumbotron fluid>
          <Container fluid>

            <Heading
              size={900}
              marginTop={majorScale(-1)}
              marginBottom={majorScale(3)}
              className="text-muted"
            >
              Welcome to the M8s Website
            </Heading>
            <hr className="my-2" />

          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
