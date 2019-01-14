
/*
    src/components/Landing/ui.js
*/

// imports
import React from 'react';

// evergreen-ui component libs
import { majorScale, Pane, Button } from 'evergreen-ui';

// reactstrap component libs
import { Container, Col } from 'reactstrap';


const UI = () => (

    <Container fluid>
        
        <Col>
            <Pane align="center">
                <Button
                appearance="primary"
                intent="success"
                marginTop={majorScale(4)}
                height={40}
                >
                Login
                </Button>
            </Pane>
        </Col>

        <Col>
            <Pane align="center">
                <Button
                appearance="primary"
                intent="none"
                marginTop={majorScale(4)}
                marginBottom={majorScale(4)}
                height={50}
                >
                Register
                </Button>
            </Pane>
        </Col>

    </Container>
);

export default UI;