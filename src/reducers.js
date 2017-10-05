import { combineReducers } from 'redux'
import auth from './reducers/auth'
import common from './reducers/common'
import register from './reducers/register'

export default combineReducers({
  auth,
  common,
  register
})
