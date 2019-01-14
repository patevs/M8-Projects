
/*
    src/components/Landing/index.js
*/

// imports
import React from 'react';

// M8S logo
import Logo from '../shared/logo';
// horizontal divider
import Divider from '../shared/divider';
// landing page ui
import UI from './ui';

// reactstrap libs
import { Container, Col } from 'reactstrap';

// Landing page component
const Landing = () => (
    <Container fluid>
        <Col 
            xs={{ size: 12, offset: 0 }} 
            sm={{ size: 8, offset: 2 }} 
            md={{ size: 6, offset: 3 }} 
            lg={{ size: 4, offset: 4 }}
        >
            <Col>
                <Logo />
                <Divider />
            </Col>

            <Col>
                <UI />
                <Divider />
            </Col>
        </Col>
    </Container>
);

export default Landing;