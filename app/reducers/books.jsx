
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'

const reducer = (state=null, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_BOOKS:
    return newState.allBooks = action.allBooks
  default: return state
  }
}
