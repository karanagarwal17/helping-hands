import React from 'react'
import { connect } from 'react-redux'

import Progress from './Progress'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'

const mapStateToProps = state => ({
  ...state.edit,
  step: state.edit.step
})

class Ngo extends React.Component {
  render(){
    switch(this.props.step) {
      case 1:
        return (
          <div>
            <Progress step={this.props.step} />
            <Form1 />
          </div>
        )
      case 2:
        return (
          <div>
            <Progress step={this.props.step} />
            <Form2 />
          </div>
        )
      case 3:
        return (
          <div>
            <Progress step={this.props.step} />
            <Form3 />
          </div>
        )
      case 4:
        return (
          <div>
            <Progress step={this.props.step} />
            <Form4 />
          </div>
        )
      default:
        return (
          <div>
            Error
          </div>
        )
    }
  }
}

export default connect(mapStateToProps, () => ({}))(Ngo)
