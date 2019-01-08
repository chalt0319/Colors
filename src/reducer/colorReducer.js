export default function colorReducer(state = "red", action) {
  switch (action.type) {
    case 'CHANGE_COLOR':

      return state = action.color

    default:
      return state
  }
}
