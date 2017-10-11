import React from 'react'
import agent from '../../agent'
import { connect } from 'react-redux'
import {
  NGO_ACCEPTED,
  NGO_REJECTED
} from '../../constants/actionTypes'


const mapStateToProps = state => ({
  ...state.admin
})

const mapDispatchToProps = dispatch => ({
  onAccept: (id) =>
    dispatch({ type: NGO_ACCEPTED, payload: agent.Admin.accept(id) }),
  onReject: (id) =>
    dispatch({ type: NGO_REJECTED, payload: agent.Admin.reject(id) })
})

class NgoList extends React.Component {
  constructor(){

    super()

    this.accept = id => ev => {
      ev.preventDefault()
      this.props.onAccept(id)
    }

    this.reject = id => ev => {
      ev.preventDefault()
      this.props.onReject(id)
    }

  }
  render() {
    const data = this.props.data
    return (
      <article className="ngo-card">
        <header className="card-thumb">
          <a href="#"><img src="http://lorempicsum.com/futurama/370/245/3"/></a>
        </header>

        <div className="card-body">
          <div className="card-category">
            <a href="#">{data.head_name}</a>
          </div>
          <h5 className="card-title">
            <a href="#">{data.org_name}</a>
          </h5>
          <p className="card-description">Phone: {data.phone_number}</p>
          <p className="card-description">City: {data.address.city}</p>
          <p className="card-description">Email: {data.email}</p>
        </div>

        <footer className="card-footer">
          <button className="card-button" onClick={this.accept(data._id)}>Accept</button>
          <button className="card-button" onClick={this.reject(data._id)}>Reject</button>
        </footer>
      </article>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NgoList)
