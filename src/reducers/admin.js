import {
  FETCH_UNAPPROVED_NGO,
  NGO_ACCEPTED,
  NGO_REJECTED
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_UNAPPROVED_NGO:
      return {
        ...state,
        ngos: action.payload,
        ngo_accepted: null,
        ngo_rejected: null
      }
    case NGO_ACCEPTED:
      return {
        ...state,
        ngo_accepted: action.error ? null : true
      }
    case NGO_REJECTED:
      return {
        ...state,
        ngo_rejected: action.error ? null : true
      }
    default:
      return state
  }
}
