import { combineReducers } from 'redux'
import auth from './reducers/auth'
import common from './reducers/common'
import edit from './reducers/edit'
import admin from './reducers/admin'
import event from './reducers/event'
import profile from './reducers/profile'
import search from './reducers/search'

export default combineReducers({
  admin,
  auth,
  common,
  event,
  profile,
  edit,
  search
})
