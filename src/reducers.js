import { combineReducers } from 'redux'
import auth from './reducers/auth'
import common from './reducers/common'
import register from './reducers/register'
import admin from './reducers/admin'

export default combineReducers({
  admin,
  auth,
  common,
  register
})
