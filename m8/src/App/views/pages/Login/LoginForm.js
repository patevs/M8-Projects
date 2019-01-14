
/*
  src/App/views/pages/Login/LoginForm.js
*/

// import react component lib
import React, { Component } from 'react';
// import reactstrap component libs
import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
// import evergreen-ui component libs
import { majorScale, Pane, TextInput, Button } from 'evergreen-ui';

// login form component class
export default class LoginForm extends Component {
    render(){
      return(
        <Container>
          <Form className="form-login">
            <FormGroup>
              <Col>
                <Label>Username: </Label>
                <TextInput
                  name="text-input-username"
                  placeholder="Enter your username"
                  marginLeft={majorScale(2)}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Password: </Label>
                <TextInput
                  name="text-input-password"
                  placeholder="Enter your password"
                  marginLeft={majorScale(2)}
                />
              </Col>
            </FormGroup>
            <Pane marginTop={majorScale(4)}>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <Button
                    appearance="primary"
                    intent="success"
                    marginLeft={majorScale(24)}
                    height={40}
                  >
                    Login
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Pane>
          </Form>
        </Container>
      );
    }
}
