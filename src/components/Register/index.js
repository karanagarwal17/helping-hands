import React from 'react'
import Volunteer from './Volunteer'
import Header from '../Header'
import Ngo from './Ngo'
import {connect} from 'react-redux'
import {
  NOT_LOGGED_IN
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLoggedOut: () =>
    dispatch({ type: NOT_LOGGED_IN })
})

class Register extends React.Component {
  render() {
    if(this.props.currentUser){
      if(this.props.currentUser.volunteer) {
        return (
          <div>
            <Header/>
            <Volunteer/>
          </div>
        )
      } else if (this.props.currentUser.ngo) {
        return (
          <div>
            <Header/>
            <Ngo step={this.props.step}/>
          </div>
        )
      }
    } else {
      this.props.onLoggedOut()
    }
    return (
      <div>
        Error
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
