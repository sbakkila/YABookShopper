import { RECEIVE_BOOKS } from '../constants'

const initialBooksState = {
  list: []
}

// JM/IB - new state not strictly necessary....

const reducer = (state=initialBooksState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_BOOKS:
    newState.list = action.allBooks
    return newState

  default:
    return state
  }
  // JM/IB - return new state here (not strictly necessary)
}

export default reducer
