import React from 'react'
import NgoCard from './NgoCard'
import Header from '../Header'
import { connect } from 'react-redux'
import agent from '../../agent'
import {
  FETCH_UNAPPROVED_NGO
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.admin,
  ngos: state.admin.ngos
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: FETCH_UNAPPROVED_NGO, payload: agent.Admin.getNgo() })
})

class Admin extends React.Component {

  componentWillMount(){
    this.props.onLoad()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.ngo_accepted || nextProps.ngo_rejected){
      this.props.onLoad()
    }
  }

  render(){
    if(this.props.ngos) {
      return (
        <div>
          <Header />
          <div className="admin-panel">
            <h4>Welcome to the Admin Panel</h4>
            <div className="row title">
              <h5>NGOs to review</h5>
            </div>
            <div className="row ngo-list">
              {
                this.props.ngos.map((ngo, index) => {
                  if(index <18 ){
                    return ( <NgoCard data={ngo} key={ngo._id} /> )
                  } else {
                    return null
                  }
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
