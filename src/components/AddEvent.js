import React from 'react'
import { connect } from 'react-redux'

import NgoDashboard from './NgoDashboard'
import {
  ADD_EVENT
} from '../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onAdd: (payload) =>
    dispatch({ type: ADD_EVENT, payload: payload })
})

class AddEvent extends React.Component {
  render() {
    if(this.props.currentUser.ngo){
      return (
        <div className="row">
          <div className="col span-1-of-4">
            <NgoDashboard active={'addevent'}/>
          </div>
          <div className="col span-3-of-4">
            <form className="register-form">
              <h1>Add events</h1>
              <div className="field">
                <input className="input" type="text"/>
                <span className="underline"></span>
                <div className="fieldname">
                  EVENT Name
                </div>
              </div>
              <div className="field">
                <input className="input" type="text"/>
                <span className="underline"></span>
                <div className="fieldname">
                  EVENT TYPE
                </div>
              </div>
              <div className="field">
                <input className="input" type="text"/>
                <span className="underline"></span>
                <div className="fieldname">
                  EVENT DATE
                </div>
              </div>
              <div className="field">
                <input className="input" type="date"/>
                <span className="underline"></span>
                <div className="fieldname">
                  EVENT VENUE
                </div>
              </div>
              <div className="field areafield">
                <textarea className="textarea" rows="7" wrap="soft" placeholder="Description"></textarea>
              </div>
              <div className="submit-button">
                <a className="btn" href="#">
                  SAVE EVENT
                </a>
              </div>
            </form>
          </div>
          </div>
      )
    } else {
      return(
        <div>
          Error
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
