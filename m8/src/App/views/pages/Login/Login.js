
/*
  src/App/views/pages/Login/Login.js
*/

// import react component lib
import React, { Component } from 'react';
// import reactstrap component libs
//import { Container, Row, Col, Form, FormGroup, Label } from 'reactstrap';
// import evergreen-ui component libs
import { Heading, majorScale } from 'evergreen-ui';

// import jumbo component
import Jumbo from "../../components/Jumbo";
// import navbar component
import NavBar from "../../components/NavBar";
// import footer component
import Footer from '../../components/Footer';

// import login form components
import LoginForm from './LoginForm';

// Login page component class
class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Jumbo />
        <NavBar name="Login" />
        <Heading
          size={700}
          marginTop={majorScale(2)}
          marginBottom={majorScale(2)}
        >
          M8s Login Page
        </Heading>
        <hr className="my-2" />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
