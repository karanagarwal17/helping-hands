import React from 'react'

class Volunteer extends React.Component {
  render(){
    return(
      <div className="row">
          <div className="form-title">
            <h2>We'd like to know more about you!</h2>
          </div>
          <form className="register-form">
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                First name
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Last Name
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Date of Birth
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Email Id
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                City
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Profession
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Contact Number
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Username
              </div>
            </div>
            <div className="field">
              <input className="input" type="password"/>
              <span className="underline"></span>
              <div className="fieldname">
                Password
              </div>
            </div>
            <div className="field">
              <input className="input" type="password"/>
              <span className="underline"></span>
              <div className="fieldname">
                Re-enter Password
              </div>
            </div>
            <div className="submit-button">
              <a className="btn" href="#">Save</a>
            </div>
          </form>
      </div>
    )
  }
}

export default Volunteer
