import { combineReducers } from 'redux'
import auth from './reducers/auth'
import common from './reducers/common'
import chat from './reducers/chat'
import edit from './reducers/edit'
import admin from './reducers/admin'
import event from './reducers/event'
import profile from './reducers/profile'
import donations from './reducers/donations'
import search from './reducers/search'

export default combineReducers({
  admin,
  auth,
  chat,
  common,
  event,
  profile,
  donations,
  edit,
  search
})
