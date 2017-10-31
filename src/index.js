import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import store from './store'
import agent from './agent'

import Activation from './components/Activation'
import App from './components/App'
import AddEvent from './components/AddEvent'
import Home from './components/Home'
import EditProfile from './components/EditProfile'
import Admin from './components/Admin'
import Profile from './components/Profile'
import Chat from './components/Chat'

// store.dispatch({ type: 'LOGIN', payload: agent.Auth.login("testing","testing") });

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="activation/:id" component={Activation} />
        <Route path="admin" component={Admin} />
        <Route path="edit" component={EditProfile} />
        <Route path="chat" component={Chat} />
        <Route path="profile" component={Profile} />
        <Route path="addevent" component={AddEvent} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
