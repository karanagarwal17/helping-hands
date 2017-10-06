import {
  APP_LOAD,
  LOGIN,
  SIGNUP,
  LOGOUT,
  REDIRECT,
  NGO_FORM_UPDATE,
  VOLUNTEER_FORM_UPDATE,
  NOT_LOGGED_IN
} from '../constants/actionTypes'

export default(state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      }
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
      if(action.payload.step === 'complete') {
        return {
          ...state,
          redirectTo: '/'
        }
      } else {
        return state
      }
    case NOT_LOGGED_IN:
      return {
        ...state,
        redirectTo: '/'
      }
    default:
      return state
  }
}
