import React from 'react'
import Volunteer from './Volunteer'
import Header from '../Header'
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
        <div>
          <Header />
          <Volunteer />
        </div>
      )
    }
    else if (this.props.usertype === 'ngo'){
      return (
        <div>
          <Header />
          <Ngo step={this.props.step}/>
        </div>
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
