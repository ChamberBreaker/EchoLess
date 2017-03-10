import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './Components/App';
import Home from './Routes/Home/';
import About from './Components/About';
import SignIn from './Routes/SignIn/';
import Profile from './Routes/Profile/';
import NotFound from './Components/NotFound';
import AuthService from './Utils/AuthService';
import './index.css';

const auth = new AuthService('riDwAzBSuxGh2T77HYJdJkwgA2WFVO8E', 'echoless.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/signin' })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="signin" component={SignIn}/>
      <Route path="profile" component={Profile} onEnter={requireAuth}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
