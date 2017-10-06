import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store'

import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import Admin from './components/Admin'

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="admin" component={Admin} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
