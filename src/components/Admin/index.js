import React from 'react'
import NgoList from './NgoList'

const mapStateToProps = state => ({
  ...state.ngoList
})

class Admin extends React.Component {
  componentWillMount(){

  }
  
  render(){
    return (
      <div className="admin-panel">
        <h4>Welcome to the Admin Panel</h4>
        <div className="row title">
          <h5>NGOs to review</h5>
        </div>
        <div className="row ngo-list">
          <NgoList />
          <NgoList />
          <NgoList />
          <NgoList />
        </div>
      </div>
    )
  }
}

export default Admin
