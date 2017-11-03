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
  onSave: (details) => dispatch({
    type: NGO_FORM_UPDATE,
    payload: {
      step: 3,
      details: agent.Ngo.post(details)
    }
  })
})

class Form2 extends React.Component {
  constructor() {
    super()

    this.state = {
      street_address: '',
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
      const details = {}
      details.address = Object.assign({}, this.state)
      this.props.onSave(details)
    }
  }

  componentWillMount() {
    if (this.props.currentUser) {
      this.setState(Object.assign({}, this.state, {
        street_address: this.props.currentUser.ngoId.address.street_address,
        landmark: this.props.currentUser.ngoId.address.landmark,
        city: this.props.currentUser.ngoId.address.city,
        district: this.props.currentUser.ngoId.address.district,
        state: this.props.currentUser.ngoId.address.state,
        pincode: this.props.currentUser.ngoId.address.pincode,
        landline: this.props.currentUser.ngoId.address.landline
      }))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        street_address: nextProps.currentUser.ngoId.address.street_address,
        landmark: nextProps.currentUser.ngoId.address.landmark,
        city: nextProps.currentUser.ngoId.address.city,
        district: nextProps.currentUser.ngoId.address.district,
        state: nextProps.currentUser.ngoId.address.state,
        pincode: nextProps.currentUser.ngoId.address.pincode,
        landline: nextProps.currentUser.ngoId.address.landline
      }))
    }
  }

  render() {
    return (
      <div className="row">
        <form className="register-form">
          <div className="field">
            <input className="input" type="text" value={this.state.street_address} onChange={this.updateState('street_address')}/>
            <span className="underline"></span>
            <div className="fieldname">
              Street Address
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
