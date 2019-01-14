
/*
    src/component/Landing/ui.js
*/

// imports
import React, { Component } from 'react';

import { Container, Col } from 'reactstrap'

import { Pane, Button, majorScale } from 'evergreen-ui';

import { Link } from 'react-router-dom';

// ui component
export default class LandingUI extends Component {
    render(){
        return(
            <Container>
                <Col>
                    <Pane align="center">
                        <Link to='/signin'>
                            <Button
                                appearance="primary"
                                intent="success"
                                marginTop={majorScale(4)}
                                height={40}
                            >
                                Login
                            </Button>
                        </Link>
                    </Pane>
                </Col>
        
                <Col>
                    <Pane align="center">
                        <Link to='/signup'>
                            <Button
                                appearance="primary"
                                intent="none"
                                marginTop={majorScale(4)}
                                height={50}
                            >
                                Register
                            </Button>
                        </Link>
                    </Pane>
                </Col>
            </Container>
        );
    }
}
