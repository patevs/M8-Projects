
/*
    src/components/shared/logo.js
*/

// imports
import React from 'react';

// evergreen ui libs
import { Pane, majorScale } from 'evergreen-ui'

// logo component
const Logo = () => (
    <Pane 
        marginTop={majorScale(4)}
        marginBottom={majorScale(4)}
    >
        <img src="img/m8s-logo.png" alt="M8S Logo" />
    </Pane>
);

export default Logo;