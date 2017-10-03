import React from 'react'

class Progress extends React.Component {
  render() {
    return (
      <div className="row">
        <h3>Enter Personal Details</h3>
        <ul className="register-progress-bar">
          <li className="completed">
            <span className="bubble"></span>
            Step 1.
          </li>
          <li className="completed">
            <span className="bubble"></span>
            Step 2.
          </li>
          <li className="completed">
            <span className="bubble"></span>
            Step 3.
          </li>
          <li className="completed">
            <span className="bubble"></span>
            Step 4.
          </li>
        </ul>
      </div>
    )
  }
}

export default Progress
