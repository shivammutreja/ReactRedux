// The state mentioned here is not the application state.
// It's the state this reducer is responsible for, i.e whatever it returns.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
