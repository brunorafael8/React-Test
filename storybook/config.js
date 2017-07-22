import { configure } from '@kadira/storybook'

const req = require.context('../src/App/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
