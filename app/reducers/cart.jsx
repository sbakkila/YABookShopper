import { RECEIVE_CART } from '../constants'

const initialCartState = {}

const reducer = (state=initialCartState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_CART:
    newState = action.cart
    return newState

  default:
    return state
  }
}

export default reducer
