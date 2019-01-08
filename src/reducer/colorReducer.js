export default function colorReducer(state = "", action) {
  switch (action.type) {
    case 'CHANGE_COLOR':

      return state = action.color

    default:
      return state
  }
}
