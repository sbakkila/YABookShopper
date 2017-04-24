import { RECEIVE_BOOK } from '../constants'
import axios from 'axios'
// maybe import browserHistory when we add a delete action?

// Regular action
export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
})

// THUNK
export const loadBook = function(id) {
  return function(dispatch) {
    axios.get(`/api/books/${id}`)
    .then(function(res) {
      return res.data
    })
    .then(function(book) {
      const action = receiveBook(book)
      dispatch(action)
    })
    .catch(function(err) {
      console.error(err)
    })
  }
}
