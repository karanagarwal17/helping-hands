import React from 'react'

class Home extends React.Component {

  toggle(){
    document.getElementsByClassName('container').classList.toggle('log-in')
  }

  render() {
    return (
      <div>
        <div id="home"></div>
        <div className="container">
          <div className="box"></div>
          <div className="container-forms">
            <div className="container-info">
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>
                      Have an account?
                    </p>
                    <div className="btn">
                      Log in
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>
                      Don't have an account?
                    </p>
                    <div className="btn">
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-form">
              <div className="form-item log-in">
                <div className="table">
                  <div className="table-cell">
                    <input name="Username" placeholder="Username" type="text"/>
                    <input name="Password" placeholder="Password" type="Password"/>
                    <div className="btn">
                      Log in
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-item sign-up">
                <div className="table">
                  <div className="table-cell">
                    <input name="email" placeholder="Email" type="text"/>
                    <input name="fullName" placeholder="Full Name" type="text"/>
                    <input name="Username" placeholder="Username" type="text"/>
                    <input name="Password" placeholder="Password" type="Password"/>
                    <div className="btn">
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
