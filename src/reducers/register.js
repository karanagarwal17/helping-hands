export default (state = {
  usertype: "volunteer",
  step: 1
}, action) => {
  switch(action.type) {
    case 'REGISTER_PROGRESS':
      return {
        ...state,
        usertype: action.payload.usertype,
        step: action.payload.step
      }
    default:
      return state
  }
}
