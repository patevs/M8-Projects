
/*
    ./storybook/config.js
    storybook configuration
*/

// imports
import { configure } from '@storybook/react';

// load stories
function loadStories() {
    require('../stories/index.js');
    // require more stories here
}

configure(loadStories, module);