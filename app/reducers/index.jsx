import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  books: require('./books').default
})

export default rootReducer
