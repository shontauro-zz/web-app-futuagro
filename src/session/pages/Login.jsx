import React from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Login.scss'

const Login = () => (
  <Router>
    <div className="login">
      <img
        className="login__cover"
        src="./images/background_big@2x.png"
        alt="farmer"
      />
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default Login
