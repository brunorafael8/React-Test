import React from 'react';
import { addDecorator, configure } from '@kadira/storybook'
import { MemoryRouter } from 'react-router';


addDecorator(story =>
    <MemoryRouter initialEntries={['/']}>
        {story()}
    </MemoryRouter>
);

const req = require.context('./stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
