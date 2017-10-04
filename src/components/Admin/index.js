import React from 'react'
import NgoList from './NgoList'
import Header from '../Header'

const mapStateToProps = state => ({
  ...state.ngoList
})

class Admin extends React.Component {
  componentWillMount(){

  }

  render(){
    return (
      <div>
        <Header />
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
      </div>
    )
  }
}

export default Admin
