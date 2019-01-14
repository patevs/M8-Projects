
/*
    src/shared/logo.js
*/

// imports
import React from 'react';
import { Container, Col } from 'reactstrap';
import { Pane, majorScale } from 'evergreen-ui';

// logo image file
import LogoImg from './m8s-logo.png';

// logo component
const Logo = () => (
    <Container fluid>
        <Col>
            <Pane 
            align="center"
            marginTop={majorScale(6)}
            >
                <img src={ LogoImg } alt="M8S Logo" />
            </Pane>
        </Col>
    </Container>
);

export default Logo;