import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
      </Route>
    </Router>
), document.getElementById('root'))
