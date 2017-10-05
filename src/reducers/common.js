import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  REDIRECT,
  NGO_FORM_UPDATE,
  VOLUNTEER_FORM_UPDATE
} from '../constants/actionTypes'

export default(state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return {
        ...state,
        redirectTo: action.error ? null : 'register',
        token: action.error ? null : action.payload.token,
        currentUser: action.error ? null : action.payload.user
      }
    case LOGOUT:
      return state
    case REDIRECT:
      return {
        ...state,
        redirectTo: null
      }
    case VOLUNTEER_FORM_UPDATE:
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      }
    case NGO_FORM_UPDATE:
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      }
    default:
      return state
  }
}
