import

export default (state = {}, action) => {
  switch(action.type){
    case 'NGO_LIST_LOADED':
      return {
        ...state,
        ngos: action.payload.ngos
      }
    default:
      return state
  }
}
