import { combineReducers } from 'redux'
import auth from './reducers/auth'
import common from './reducers/common'
import register from './reducers/register'
import admin from './reducers/admin'
import event from './reducers/event'
import profile from './reducers/profile'

export default combineReducers({
  admin,
  auth,
  common,
  event,
  profile,
  register
})
