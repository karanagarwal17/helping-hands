import {
  CHAT_LOADED,
  LOAD_USER_LIST,
  LOAD_CHAT_HISTORY
} from '../constants/actionTypes'

export default (state={}, action) => {
  switch(action.type) {
    case CHAT_LOADED:
      return {
        ...state
      }
    case LOAD_USER_LIST:
      return {
        ...state,
        userList: action.payload.friends
      }
    case LOAD_CHAT_HISTORY:
      return {
        ...state,
        messages: action.payload
      }
    default: return state
  }
}
