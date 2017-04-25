import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import WhoAmI from './WhoAmI'
import {connect} from 'react-redux'

const Auth = connect(
  (state) => {
    // console.log(state,  'this is the state in auth')
    return { user: state.auth, ...state }
  }
)(
  (props) => {
    console.log(props, 'here are the props in auth')
    return (
      <div id="main" className="container-fluid">
        <Navbar user={props.user} cart={props.cart} />
        {props.children}
        <Footer />
      </div>
    )
  }
)

export default Auth
