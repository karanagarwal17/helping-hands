import React from 'react'
import { connect } from 'react-redux'

import agent from '../../../agent'
import {
  NGO_FORM_LOAD,
  NGO_FORM_UPDATE
} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.edit,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: NGO_FORM_LOAD }),
  onSave: (details) =>
    dispatch({ type: NGO_FORM_UPDATE, payload: { step: 4, details: agent.Ngo.post(details) }})
})

class Form3 extends React.Component {
  constructor() {
    super()

    this.state = {
      account_holder: '',
      account_no: '',
      bank_name: '',
      branch_name: '',
      branch_city: '',
      ifsc_code: ''
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
      const details = {}
      details.bank_details = Object.assign({}, this.state)
      this.props.onSave(details)
    }
  }

  componentWillMount() {
  if (this.props.currentUser) {
    this.setState(Object.assign({}, this.state, {
      account_holder: this.props.currentUser.ngoId.bank_details.account_holder,
      account_no: this.props.currentUser.ngoId.bank_details.account_no,
      bank_name: this.props.currentUser.ngoId.bank_details.bank_name,
      branch_name: this.props.currentUser.ngoId.bank_details.branch_name,
      branch_city: this.props.currentUser.ngoId.bank_details.branch_city,
      ifsc_code: this.props.currentUser.ngoId.bank_details.ifsc_code
    }))
  }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.currentUser) {
    this.setState(Object.assign({}, this.state, {
      account_holder: nextProps.currentUser.ngoId.bank_details.account_holder,
      account_no: nextProps.currentUser.ngoId.bank_details.account_no,
      bank_name: nextProps.currentUser.ngoId.bank_details.bank_name,
      branch_name: nextProps.currentUser.ngoId.bank_details.branch_name,
      branch_city: nextProps.currentUser.ngoId.bank_details.branch_city,
      ifsc_code: nextProps.currentUser.ngoId.bank_details.ifsc_code
    }))
  }
}

  render(){
    return(
      <div className="row">
          <form className="register-form">
            <div className="field">
              <input className="input" type="text" value={this.state.account_holder} onChange={this.updateState('account_holder')}/>
              <span className="underline"></span>
              <div className="fieldname">
                Account Holder
              </div>
            </div>
            <div className="field">
              <input className="input" type="text" value={this.state.account_no} onChange={this.updateState('account_no')}/>
              <span className="underline"></span>
              <div className="fieldname">
                Account Number
              </div>
            </div>
            <div className="field">
              <input className="input" type="text" value={this.state.bank_name} onChange={this.updateState('bank_name')}/>
              <span className="underline"></span>
              <div className="fieldname">
                Bank Name
              </div>
            </div>
            <div className="field">
              <input className="input" type="text" value={this.state.branch_name} onChange={this.updateState('branch_name')}/>
              <span className="underline"></span>
              <div className="fieldname">
                Branch Name
              </div>
            </div>
            <div className="field">
              <input className="input" type="text" value={this.state.branch_city} onChange={this.updateState('branch_city')}/>
              <span className="underline"></span>
              <div className="fieldname">
                Branch City
              </div>
            </div>
            <div className="field">
              <input className="input" type="text" value={this.state.ifsc_code} onChange={this.updateState('ifsc_code')}/>
              <span className="underline"></span>
              <div className="fieldname">
                IFSC Code
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

export default connect(mapStateToProps,mapDispatchToProps)(Form3)
