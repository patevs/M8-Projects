
/*
  src/components/Landing/index.js
*/

// imports
import React from 'react';
import { Container } from 'reactstrap';

// M8S Logo
import Logo from '../../shared/Logo';
// Horizontal divider
import Divider from '../../shared/Divider';
// UI
import LandingUI from './landing-ui';

// Landing page object
const Landing = () => (
  <Container fluid>
    <Logo />
    <Divider />
    <LandingUI />
    <Divider />
  </Container>
);

export default Landing;

