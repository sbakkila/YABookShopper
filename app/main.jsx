'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Books from './components/Books'

import SignUpContainer from './components/SignUp'
import Cart from './components/Cart'

import AllBooksContainer from './containers/AllBooksContainer'
import SingleBookContainer from './containers/SingleBookContainer'
import AllOrdersContainer from './containers/AllOrdersContainer'
import CartContainer from './containers/CartContainer'

import {loadBooks} from './action-creators/books'
import {loadBook} from './action-creators/book'

const onBooksEnter = function(nextRouterState) {
  store.dispatch(loadBooks())
}

const onBookEnter = function(nextRouterState) {
  const bookId = nextRouterState.params.id
  store.dispatch(loadBook(bookId))
}

// JM/IM - *could* extract out auth component
const Auth = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Auth}>
        <IndexRedirect to="/books" />
        <Route path="/books" component={AllBooksContainer} onEnter={onBooksEnter} />
        <Route path="/orders" component={AllOrdersContainer}/>
        <Route path="/cart" component={CartContainer}/>
        <Route path="/signup" component={SignUpContainer}/>
        <Route path="/books/:id" component={SingleBookContainer} onEnter={onBookEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
