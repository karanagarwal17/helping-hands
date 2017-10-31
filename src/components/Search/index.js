import React from 'react'
import { connect } from 'react-redux'

import Dashboard from '../Dashboard'
import NgoDashboard from '../NgoDashboard'
import Header from '../Header'
import SearchEngine from './SearchEngine'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

class Search extends React.Component {
  render() {
    if(this.props.currentUser){
      if(this.props.currentUser.volunteer){
        return (
          <div>
            <Header/>
            <div className="row Profile">
              <div className="col span-1-of-4">
                <Dashboard active="search"/>
              </div>
              <div className="col span-3-of-4 searchContainer">
                <SearchEngine />
              </div>
            </div>
          </div>
        )
      } else if(this.props.currentUser.ngo){
        return(
          <div>
            <Header/>
            <div className="row Profile">
              <div className="col span-1-of-4">
                <NgoDashboard active="search"/>
              </div>
              <div className="col span-3-of-4 searchContainer">
                <SearchEngine />
              </div>
            </div>
          </div>          
        )
      }
    } else {
      return(
        <div>
          Error
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(Search)
