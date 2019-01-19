export default function colorReducer(state = "red", action) {
  // default color set to red, until changed
  switch (action.type) {
    case 'CHANGE_COLOR':

      return state = action.color

    default:
      return state
  }
}
