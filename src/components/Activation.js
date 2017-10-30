import React from 'react'
import agent from '../agent'
import { connect } from 'react-redux'
import {
  PROFILE_ACTIVATED
} from '../constants/actionTypes'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  onLoad: (token) =>
    dispatch({ type: PROFILE_ACTIVATED, payload: agent.Auth.activate(token) })
})

class Activation extends React.Component {
  componentWillMount(){
    token = this.props.params.id
    this.props.onLoad(token)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activation)
