import React from 'react'
import { storiesOf } from '@kadira/storybook';

import Header from 'src/components/header/Header'

const stories = storiesOf('Header', module);

stories.add('default', () => <Header title="Header" />);
