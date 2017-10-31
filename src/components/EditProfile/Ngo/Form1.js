import React from 'react'
import { connect } from 'react-redux'

import agent from '../../../agent'
import {
  NGO_FORM_UPDATE
} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.register
})

const mapDispatchToProps = dispatch => ({
  onSave: (details) =>
    dispatch({ type: NGO_FORM_UPDATE, payload: { step: 2, details: agent.Ngo.post(details) }})
})

class Form1 extends React.Component {
  constructor() {
    super()

    this.state = {
      org_name: '',
      head_name: '',
      gender: '',
      phone_number: '',
      email: '',
      category: ''
    }

    this.updateState = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {
        [field]: ev.target.value
      })
      this.setState(newState)
    }

    this.submitForm = ev => {
      ev.preventDefault()

      const details = Object.assign({}, this.state)
      this.props.onSave(details)
      console.log(details)
    }
  }

  render() {
    return (
      <div className="row">
        <form className="register-form">
          <div className="field">
            <input className="input" type="text" value={this.state.org_name} onChange={this.updateState('org_name')}/>
            <span className="underline"></span>
            <div className="fieldname">
              NGO Name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.head_name} onChange={this.updateState('head_name')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Representative Name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.gender} onChange={this.updateState('gender')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Gender
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.email} onChange={this.updateState('email')}/>
            <span className="underline"></span>
            <div className="fieldname">
              E-mail
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.phone_number} onChange={this.updateState('phone_number')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Contact No.
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.category} onChange={this.updateState('category')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Category
            </div>
          </div>
          <div className="submit-button">
            <a className="btn" href="#" onClick={this.submitForm}>Save</a>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)
