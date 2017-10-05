import {
  LOGIN,
  SIGNUP,
  UPDATE_FIELD_AUTH,
  HOME_PAGE_UNLOADED
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case LOGIN:
    case SIGNUP:
      return {
        ...state,
        errors: action.error ? action.payload.errors : null
      }
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value }
    case HOME_PAGE_UNLOADED:
      return {}
    default:
      return state
  }
}
