import React from 'react'
import agent from '../agent'
import { connect } from 'react-redux'
import {
  LOGIN,
  SIGNUP,
  UPDATE_FIELD_AUTH,
  HOME_PAGE_UNLOADED
} from '../constants/actionTypes'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value}),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsertype: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'usertype', value }),
  onLogin: (username, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(username, password) }),
  onSignup: (username, password, usertype) =>
    dispatch({ type: SIGNUP, payload: agent.Auth.signup(username, password, usertype) }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
})

class Home extends React.Component {

  constructor() {
    super()
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value)
    this.changePassword = ev => this.props.onChangePassword(ev.target.value)
    this.changeUsertype = ev => this.props.onChangeUsertype(ev.target.value)
    this.login = (username, password) => ev => {
      ev.preventDefault()
      this.props.onLogin(username, password)
    }
    this.signup = (username, password, usertype) => ev => {
      ev.preventDefault()
      this.props.onSignup(username, password, usertype)
    }
  }

  componentWillUnmount() {
    this.props.onUnload()
  }

  toggle() {
    var element = document.getElementsByClassName('container')
    element[0].classList.toggle('log-in')
  }

  render() {
    const username = this.props.username
    const password = this.props.password
    const usertype = this.props.usertype
    return (
      <div>
        <div id="home"></div>
        <div className="container">
          <div className="info-item">
            <h1>
              Have an account?
            </h1>
            <p>
              Log in to see what events are taking place and what your peers are up to.
            </p>
            <button className="btn" onClick={this.toggle}>
              Log in
            </button>
          </div>
          <div className="info-item">
            <h1>
              Don't Have an account?
            </h1>
            <p>
              Sign up for the best NGO social network out there and discover your true self.
            </p>
            <button className="btn" onClick={this.toggle}>
              Sign up
            </button>
          </div>
          <div className="container-form">
            <div className="form-item log-in">
              <h2>
                Log in
              </h2>
              <div className="field">
                <input className="input" type="text" placeholder="Username" value={this.username} onChange={this.changeUsername}/>
                <span className="underline"></span>
              </div>
              <div className="field">
                <input className="input" type="password" placeholder="Password" value={this.password} onChange={this.changePassword}/>
                <span className="underline"></span>
              </div>
              <button className="btn" onClick={this.login(username, password)} disabled={this.props.inProgress}>
                LOG IN
              </button>
            </div>
            <div className="form-item sign-up">
              <h2>
                Sign Up
              </h2>
              <div className="field">
                <input className="input" type="text" placeholder="Username" value={this.username} onChange={this.changeUsername}/>
                <span className="underline"></span>
              </div>
              <div className="field">
                <input className="input" type="password" placeholder="Password" value={this.password} onChange={this.changePassword}/>
                <span className="underline"></span>
              </div>
              <div className="radio-field">
                <input id="option1" className="input" name="select" type="radio" value="volunteer" onChange={this.changeUsertype}/>
                <label><span><span></span></span>Volunteer</label>
                <input id="option2" className="input" name="select" type="radio" value="ngo" onChange={this.changeUsertype}/>
                <label><span><span></span></span>NGO</label>
              </div>
              <button className="btn" onClick={this.signup(username, password, usertype)} disabled={this.props.inProgress}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
