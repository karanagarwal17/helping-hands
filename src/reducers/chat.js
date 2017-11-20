import {
  CHAT_LOADED,
  LOAD_CHAT_HISTORY,
  LOAD_CHAT_USER,
  LOAD_USER_LIST
} from '../constants/actionTypes'

export default (state={}, action) => {
  switch(action.type) {
    case CHAT_LOADED:
      return {
        ...state,
        messages: null,
        chatUser: null
      }
    case LOAD_USER_LIST:
      return {
        ...state,
        userList: action.payload.friends
      }
    case LOAD_CHAT_HISTORY:
      return {
        ...state,
        message: action.payload
      }
    case LOAD_CHAT_USER:
      return {
        ...state,
        chatUser: action.payload.user
      }
    default: return state
  }
}
