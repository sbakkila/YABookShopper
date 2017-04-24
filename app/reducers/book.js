import { RECEIVE_BOOK } from '../constants'


const reducer = (state={}, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_BOOK:
    newState = action.book
    return newState

  default:
    return state
  }
}

export default reducer
