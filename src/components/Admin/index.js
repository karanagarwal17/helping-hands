import React from 'react'
import NgoList from './NgoList'

class Admin extends React.Component {
  render(){
    return (
      <div className="row admin-panel">
        <h4>Welcome to the Admin Panel</h4>
        <div className="title">
          <h5>NGOs to review</h5>
        </div>
        <NgoList />
      </div>
    )
  }
}

export default Admin
