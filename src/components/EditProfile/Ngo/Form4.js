import React from 'react'
import { connect } from 'react-redux'

import agent from '../../../agent'
import {
  NGO_FORM_LOAD, NGO_FORM_UPDATE
} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.edit,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({type: NGO_FORM_LOAD}),
  onSave: (details) => dispatch({
    type: NGO_FORM_UPDATE,
    payload: {
      step: 'complete',
      details: agent.Ngo.post(details)
    }
  })
})

class Form4 extends React.Component {
  constructor() {
    super()

    this.state = {
      registration_number: '',
      identity_proof: '',
      valid_from: '',
      valid_to: ''
    }

    this.updateState = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {[field]: ev.target.value})
      this.setState(newState)
    }

    this.submitForm = ev => {
      ev.preventDefault()
      const details = {}
      details.registration_details = Object.assign({}, this.state)
      this.props.onSave(details)
    }
  }

  componentWillMount() {
    if (this.props.currentUser) {
      this.setState(Object.assign({}, this.state, {
        registration_number: this.props.currentUser.ngoId.registration_details.registration_number,
        identity_proof: this.props.currentUser.ngoId.registration_details.identity_proof,
        valid_from: this.props.currentUser.ngoId.registration_details.valid_from,
        valid_to: this.props.currentUser.ngoId.registration_details.valid_to
      }))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        registration_number: nextProps.currentUser.ngoId.registration_details.registration_number,
        identity_proof: nextProps.currentUser.ngoId.registration_details.identity_proof,
        valid_from: nextProps.currentUser.ngoId.registration_details.valid_from,
        valid_to: nextProps.currentUser.ngoId.registration_details.valid_to
      }))
    }
  }

  render() {
    return (
      <div className="row">
        <form className="register-form">
          <div className="field">
            <input className="input" type="text" value={this.state.registration_number} onChange={this.updateState('registration_number')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Registration Number
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.identity_proof} onChange={this.updateState('identity_proof')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Identity Proof
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.valid_from} onChange={this.updateState('valid_from')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Valid From
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.valid_to} onChange={this.updateState('valid_to')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Valid To
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

export default connect(mapStateToProps, mapDispatchToProps)(Form4)
