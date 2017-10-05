import React from 'react'
import Volunteer from './Volunteer'
import Header from '../Header'
import Ngo from './Ngo'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser,
})

class Register extends React.Component {
  render(){
    if(this.props.currentUser.volunteer){
      return (
        <div>
          <Header />
          <Volunteer />
        </div>
      )
    }
    else if (this.props.currentUser.ngo){
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
