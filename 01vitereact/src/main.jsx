import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com',target: '_blank'},
  'click me to visit google'
)

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
