import {
  CLEAR,
  LOGIN,
  SIGNUP,
  HOME_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case CLEAR:
      return {
        ...state,
        username: "",
        password: "",
        usertype: "",
        errors: ""
      }
    case LOGIN:
    case SIGNUP:
      return {
        ...state,
        username: "",
        password: "",
        usertype: "",
        inProgress: false,
        errors: action.error ? action.payload.response.body.err.message : null
      }
    case ASYNC_START:
      if(action.subtype === LOGIN || action.subtype === SIGNUP ) {
        return { ...state, inProgress: true}
      }
      return state
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value }
    case HOME_PAGE_UNLOADED:
      return {}
    default:
      return state
  }
}
