import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  reducer: require('./books').default
})

export default rootReducer
