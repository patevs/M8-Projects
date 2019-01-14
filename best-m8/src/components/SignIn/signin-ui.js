
/*
    src/components/SignIn/ui.js
*/

// imports
import React from 'react'

// import evergreen-ui component libs
import { majorScale, Button } from 'evergreen-ui';

// import reactstrap component libs
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

// signin from ui component
const SignInUI = () => (
    <Form>
        <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 4 }} md={{ size: 4, offset: 4 }}>
        <FormGroup>
            <Label for="login-email">Email:</Label>
            <Input type="email" name="email" id="login-email" placeholder="Enter your email"></Input>
        </FormGroup>
        </Col>
        <Col xs={{ size: 10, offset: 1 }} sm={{ size: 5, offset: 4 }} md={{ size: 4, offset: 4 }}>
        <FormGroup>
            <Label for="login-password">Password:</Label>
            <Input type="password" name="password" id="login-password" placeholder="Enter your password"></Input>
        </FormGroup>
        </Col>
        <Col xs={{ size: 'auto', offset: 1 }} sm={{ size: 'auto', offset: 4 }} md={{ size: 'auto', offset: 4 }}>
            <Button
                appearance="primary"
                intent="success"
                marginRight={majorScale(4)}
                marginBottom={majorScale(2)}
            >
                Signin
            </Button>
        </Col>
    </Form>
);

export default SignInUI;