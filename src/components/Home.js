import React from 'react'

class Home extends React.Component {

  toggle() {
    var element = document.getElementsByClassName('container')
    console.log(element)
    element[0].classList.toggle('log-in')
  }

  render() {
    return (
      <div>
        <div id="home"></div>
        <div className="container">
          <div className="info-item">
            <h1>
              Have an account?
            </h1>
            <p>
              Log in to see what events are taking place and what your peers are up to.
            </p>
            <button className="btn" onClick={this.toggle}>
              Log in
            </button>
          </div>
          <div className="info-item">
            <h1>
              Don't Have an account?
            </h1>
            <p>
              Sign up for the best NGO social network out there and discover your true self.
            </p>
            <button className="btn" onClick={this.toggle}>
              Sign up
            </button>
          </div>
          <div className="container-form">
            <div className="form-item log-in">
              <h2>
                Log in
              </h2>
            </div>
            <div className="form-item sign-up">
              <h2>
                Sign Up
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
