import React from 'react'

class Progress extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="register-progress-bar">
          <li className="completed">
            <span className="bubble"></span>
            Enter Details
          </li>
          <li className={(this.props.step > 1 ? 'completed' : '')}>
            <span className="bubble"></span>
            Verify
          </li>
          <li className={(this.props.step > 2 ? 'completed' : '')}>
            <span className="bubble"></span>
            Something Here
          </li>
          <li className={(this.props.step > 3 ? 'completed' : '')}>
            <span className="bubble"></span>
            Here as well
          </li>
        </ul>
      </div>
    )
  }
}

export default Progress
