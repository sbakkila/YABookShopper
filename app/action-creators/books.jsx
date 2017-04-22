import { RECEIVE_BOOKS } from '../constants'
import axios from 'axios'
// maybe import browserHistory when we add a delete action?

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
      console.log('res: ', res)
      return res.data
    })
    .then(function(books) {
      console.log('books ', books)
      const action = receiveBooks(books)
      dispatch(action)
    })
    .catch(function(err) {
      console.error(err)
    })
  }
}
