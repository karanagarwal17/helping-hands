import React from 'react'
import Volunteer from './Volunteer'
import Ngo from './Ngo'
import { connect } from 'react-redux'
import { REGISTER_PROGRESS } from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state,
  usertype: state.register.usertype,
  step: state.register.step
})

const mapDispatchToProps = dispatch => ({
  onProgress: (payload) =>
    dispatch({ type: REGISTER_PROGRESS, payload})
})

class Register extends React.Component {
  render(){
    if(this.props.usertype === 'volunteer'){
      return (
        <Volunteer />
      )
    }
    else if (this.props.usertype === 'ngo'){
      return (
        <Ngo step={this.props.step}/>
      )
    }
    return (
      <div>
        Error
      </div>
    )
  }
}

export default connect(mapStateToProps,() => ({}))(Register)
