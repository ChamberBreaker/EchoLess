import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PageLayout from './components/PageLayout/';
import Home from './components/Home/';
import About from './components/About';
import SignIn from './components/SignIn/';
import Profile from './components/Profile/';
import NotFound from './components/NotFound';
import AuthService from './utils/AuthService';
import './../public/index.css';

const auth = new AuthService('riDwAzBSuxGh2T77HYJdJkwgA2WFVO8E', 'echoless.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/signin' })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={PageLayout} auth={auth}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="signin" component={SignIn}/>
      <Route path="profile" component={Profile} onEnter={requireAuth}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
