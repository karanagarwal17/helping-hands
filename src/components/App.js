import React from 'react'
import agent from '../agent'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './Header'
import {
  APP_LOAD,
  REDIRECT
} from '../constants/actionTypes'

const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
})

const mapDispatchToProps = dispatch => ({
  onLoad: (currentUser, token) =>
    dispatch({ type: APP_LOAD, payload: currentUser, token: token}),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
})

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo)
      this.props.onRedirect()
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt')
    const currentUser = window.localStorage.getItem('user')
    if(token) {
      agent.setToken(token)
    }
    if(currentUser) {
      this.props.onLoad(currentUser, token)
    }
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
