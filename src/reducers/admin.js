import {
  FETCH_UNAPPROVED_NGO
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_UNAPPROVED_NGO:
      return {
        ...state,
        ngos: action.payload
      }
    default:
      return state
  }
}
