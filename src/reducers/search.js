import {
  SEARCH
} from '../constants/actionTypes'

export default(state = {}, action) => {
  switch(action.type){
    case SEARCH:
      return{
        ...state,
        searchResults: action.payload
      }
    default:
      return state
  }
}
