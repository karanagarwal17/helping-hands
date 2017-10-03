import React from 'react'

import Progress from './Progress'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'

class Ngo extends React.Component {
  render(){
    // switch(this.register.ngo.step) {
    //   case 1:
    //     return (
    //       <div>
    //         <Progress />
    //         <Form1 />
    //       </div>
    //     )
    //   case 2:
    //     return (
    //       <div>
    //         <Progress />
    //         <Form2 />
    //       </div>
    //     )
    //   case 3:
    //     return (
    //       <div>
    //         <Progress />
    //         <Form3 />
    //       </div>
    //     )
    //   case 4:
    //     return (
    //       <div>
    //         <Progress />
    //         <Form4 />
    //       </div>
    //     )
    // }
    return <Progress />
  }
}

export default Ngo
