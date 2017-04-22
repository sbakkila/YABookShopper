import axios from 'axios'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'

export const receiveBooks = (listOfBooks) => {
  return {
    type: RECEIVE_BOOKS,
    allBooks: listOfBooks
  }
}

export const loadBooks = function() {
  return function(dispatch) {
    axios.get('/api/books')
    .then(function(res) {
      return res.data
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
