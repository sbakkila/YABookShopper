import { combineReducers } from 'redux'

// JM/IM - consistency great.. but you'd normally see import/export stuff
const rootReducer = combineReducers({
  auth: require('./auth').default,
  books: require('./books').default,
  book: require('./book').default,
  orders: require('./orders').default,
  cart: require('./cart').default
})

export default rootReducer
