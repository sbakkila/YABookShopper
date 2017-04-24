import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  books: require('./books').default,
  book: require('./book').default
})

export default rootReducer
