import React from 'react'
import Volunteer from './Volunteer'
import Ngo from './Ngo'



class Register extends React.Component {
  render(){
    // if(this.register.type === 'volunteer'){
    //   return (
    //     <Volunteer />
    //   )
    // }
    // else if (this.register.type === 'ngo'){
    //   return (
    //     <Ngo />
    //   )
    // }
    return (
      <Ngo />
    )
  }
}

export default Register
