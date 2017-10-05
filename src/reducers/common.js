import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  REDIRECT
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
    default:
      return state
  }
}
