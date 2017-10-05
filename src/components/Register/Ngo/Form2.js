import React from 'react'
import {connect} from 'react-redux'
import {NGO_FORM_UPDATE} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.register
})

const mapDispatchToProps = dispatch => ({
  onSave: (details) => dispatch({
    type: NGO_FORM_UPDATE,
    payload: {
      step: 3,
      details: details
    }
  })
})

class Form2 extends React.Component {
  constructor() {
    super()

    this.state = {
      house_number: '',
      street_name: '',
      landmark: '',
      city: '',
      district: '',
      state: '',
      pincode: '',
      landline: ''
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
      <div className="row">
        <form className="register-form">
          <div className="field">
            <input className="input" type="text" value={this.state.house_number} onChange={this.updateState('house_number')}/>
            <span className="underline"></span>
            <div className="fieldname">
              House Number
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.street_name} onChange={this.updateState('street_name')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Street Name
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.landmark} onChange={this.updateState('landmark')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Landmark
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.city} onChange={this.updateState('city')}/>
            <span className="underline"></span>
            <div className="fieldname">
              city
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.district} onChange={this.updateState('district')}/>
            <span className="underline"></span>
            <div className="fieldname">
              district
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.state} onChange={this.updateState('state')}/>
            <span className="underline"></span>
            <div className="fieldname">
              state
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.pincode} onChange={this.updateState('pincode')}/>
            <span className="underline"></span>
            <div className="fieldname">
              pincode
            </div>
          </div>
          <div className="field">
            <input className="input" type="text" value={this.state.landline} onChange={this.updateState('landline')}/>
            <span className="underline"></span>
            <div className="fieldname">
              landline
            </div>
          </div>
          <div className="submit-button">
            <a className="btn" href="#" onClick={this.submitForm} >Save</a>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2)
