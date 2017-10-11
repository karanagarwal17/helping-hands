import React from 'react'
import { connect } from 'react-redux'
import {
  NGO_FORM_UPDATE
} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.register
})

const mapDispatchToProps = dispatch => ({
  onSave: (details) =>
    dispatch({ type: NGO_FORM_UPDATE, payload: { step: 4, details: details }})
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

      const details = Object.assign({}, this.state)
      this.props.onSave(details)
      console.log(details)
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
