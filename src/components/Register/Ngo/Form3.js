import React from 'react'

class Form3 extends React.Component {
  render(){
    return(
      <div className="row">
          <form className="register-form">
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Name
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
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Email
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Password
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Password
              </div>
            </div>
            <div className="field">
              <input className="input" type="text"/>
              <span className="underline"></span>
              <div className="fieldname">
                Password
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

export default Form3
