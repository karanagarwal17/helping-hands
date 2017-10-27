import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import store from './store'
import agent from './agent'

import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import Admin from './components/Admin'
import Profile from './components/Profile'

//store.dispatch({ type: 'LOGIN', payload: agent.Auth.login("test","test") });

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="admin" component={Admin} />
        <Route path="profile" component={Profile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
