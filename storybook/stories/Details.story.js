import React from 'react'
import { storiesOf } from '@kadira/storybook';
import EpsApi from 'src/data'

import Details from 'src/components/details/Details'

const stories = storiesOf('Details', module);

stories.add('default', () => <Details />	);
