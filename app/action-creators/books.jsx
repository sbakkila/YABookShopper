import { RECEIVE_BOOKS } from '../constants'
import axios from 'axios'
// maybe import browserHistory when we delete?

// Regular action
export const receiveBooks = (allBooks) => ({
  type: RECEIVE_BOOKS,
  allBooks
})

// THUNK
export const loadBooks = function() {
  return function(dispatch) {
    axios.get('/api/books')
    .then(function(res) {
      // try res.json()
      return res.json()
    })
    .then(function(books) {
      const action = receiveBooks(books)
      dispatch(action)
    })
    .catch(function(err) {
      console.error(err)
    })
  }
}
