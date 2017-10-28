import React from 'react'

class Progress extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="register-progress-bar">
          <li className="completed">
            <span className="bubble"></span>
            Personal Details
          </li>
          <li className={(this.props.step > 1 ? 'completed' : '')}>
            <span className="bubble"></span>
            Address Details
          </li>
          <li className={(this.props.step > 2 ? 'completed' : '')}>
            <span className="bubble"></span>
            Bank Details
          </li>
          <li className={(this.props.step > 3 ? 'completed' : '')}>
            <span className="bubble"></span>
            Registration Details
          </li>
        </ul>
      </div>
    )
  }
}

export default Progress
