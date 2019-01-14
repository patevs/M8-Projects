
/*
    stories/index.js
    storybook stories
*/

// imports
import React from 'react';
import { storiesOf } from '@storybook/react';

// landing page
import Landing from '../src/components/Landing';

storiesOf('Pages', module)
    .add('Landing Page', () => <Landing />);