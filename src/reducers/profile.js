import {
  PROFILE_LOAD
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case PROFILE_LOAD:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}
