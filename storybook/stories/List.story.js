import React from 'react'
import { storiesOf } from '@kadira/storybook';

import List from 'src/components/home/List'

const stories = storiesOf('List', module);

stories.add('default', () => <List />);
