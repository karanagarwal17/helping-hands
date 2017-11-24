import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import store from './store'
import agent from './agent'

import Activation from './components/Activation'
import App from './components/App'
import AddEvent from './components/AddEvent'
import Donate from './components/Donate'
import Donations from './components/Donations'
import Home from './components/Home'
import EditProfile from './components/EditProfile'
import Admin from './components/Admin'
import NgoProfile from './components/Profile/NgoProfile'
import VolunteerProfile from './components/Profile/VolunteerProfile'
import Chat from './components/Chat'
import Search from './components/Search'

//store.dispatch({ type: 'LOGIN', payload: agent.Auth.login("Karan","pass") });
//store.dispatch({ type: 'LOGIN', payload: agent.Auth.login("Aman","pass") });

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="activation/:id" component={Activation} />
        <Route path="admin" component={Admin} />
        <Route path="edit" component={EditProfile} />
        <Route path="chat" component={Chat} />
        <Route path="chat/:id" component={Chat} />
        <Route path="donations" component={Donations} />
        <Route path="donate/:id" component={Donate} />
        <Route path="profile/ngo/:id" component={NgoProfile} />
        <Route path="profile/volunteer/:id" component={VolunteerProfile} />
        <Route path="addevent" component={AddEvent} />
        <Route path="search" component={Search} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
