import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">Helping Hands</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
