export default function colorReducer(state = "red", action) {
  // default color set to red, until changed
  switch (action.type) {
    case 'CHANGE_COLOR':
      // this will take the color that is selected, and change the state accordingly
      return state = action.color

    default:
      return state
  }
}
