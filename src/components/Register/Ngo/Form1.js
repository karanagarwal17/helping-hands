import React from 'react'
import {connect} from 'react-redux'
import {NGO_FORM_UPDATE} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.register
})

const mapDispatchToProps = dispatch => ({
  onSave: () => dispatch({
    type: NGO_FORM_UPDATE,
    payload: {
      step: 2
    }
  })
})

class Form1 extends React.Component {
  constructor() {
    super()

    this.state = {
      org_ame: '',
      head_name: '',
      gender: '',
      email: '',
      category: ''
    }

    this.updateState = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {
        [field : ev.target.value]
      })
      this.setState(newState)
    }

    this.submitForm = ev => {
      ev.preventDefault()

      const details = Object.assign({}, this.state)
      this.props.onSubmitForm(details)
    }
  }

  render() {
    return (
      <div className="row">
        <form className="register-form">
          <div className="field">
            <input className="input" type="text"/>
            <span className="underline"></span>
            <div className="fieldname">
              NGO Name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text"/>
            <span className="underline"></span>
            <div className="fieldname">
              Representative Name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text"/>
            <span className="underline"></span>
            <div className="fieldname">
              Gender
            </div>
          </div>
          <div className="field">
            <input className="input" type="password"/>
            <span className="underline"></span>
            <div className="fieldname">
              E-mail
            </div>
          </div>
          <div className="field">
            <input className="input" type="text"/>
            <span className="underline"></span>
            <div className="fieldname">
              Contact No.
            </div>
          </div>
          <div className="field">
            <input className="input" type="text"/>
            <span className="underline"></span>
            <div className="fieldname">
              Category
            </div>
          </div>
          <div className="submit-button">
            <a className="btn" onClick={this.submitForm}>Save</a>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
