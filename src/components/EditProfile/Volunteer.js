import React from 'react'
import { connect } from 'react-redux'

import agent from '../../agent'
import {
  VOLUNTEER_FORM_UPDATE
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.register
})

const mapDispatchToProps = dispatch => ({
  onSave: (details) =>
    dispatch({ type: VOLUNTEER_FORM_UPDATE, payload: agent.Volunteer.post(details) })
})

class Volunteer extends React.Component {
  constructor() {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      gender: '',
      phone_number: '',
      email: '',
      city: '',
      profession: '',
      date_of_birth: ''
    }

    this.updateState = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {[field]: ev.target.value})
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
      <div className="row volunteer-form">
        <div className="form-title">
          <h2>We'd like to know more about you!</h2>
        </div>
        <form className="register-form">
          <div className="field">
            <input className="input" type="text" value={this.state.firstname} onChange={this.updateState('firstname')}/>
            <span className="underline"></span>
            <div className="fieldname">
              First name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.lastname} onChange={this.updateState('lastname')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Last Name
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
            <input className="input" type="text" value={this.state.date_of_birth} onChange={this.updateState('date_of_birth')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Date of Birth
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.email} onChange={this.updateState('email')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Email Id
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.city} onChange={this.updateState('city')}/>
            <span className="underline"></span>
            <div className="fieldname">
              City
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.profession} onChange={this.updateState('profession')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Profession
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.phone_number} onChange={this.updateState('phone_number')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Contact Number
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

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer)
