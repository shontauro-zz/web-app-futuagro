import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'

import './App.scss'

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route path={path} component={component} key={key} />
  ))

  return (
    <div className="App">
      <Router>{routeComponents}</Router>
    </div>
  )
}

export default App
