import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import WhoAmI from './WhoAmI'
import {connect} from 'react-redux'

const Auth = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div id="main" className="container-fluid">
      <Navbar user={user ? <WhoAmI/> : <Login/>}/>
        {children}
      <Footer />
    </div>
)

export default Auth
