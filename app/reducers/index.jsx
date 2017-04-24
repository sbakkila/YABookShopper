import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  books: require('./books').default,
  book: require('./book').default,
  orders: require('./orders').default
})

export default rootReducer
