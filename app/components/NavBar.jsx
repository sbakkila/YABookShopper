import React, {Component} from 'react'
import { Link } from 'react-router'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    console.log(props, 'here are we testing the props')
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">YA BOOK SHOPPER</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">My Account<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  <span className="glyphicon glyphicon-shopping-cart"/> 7 - Items<span className="caret"/></a>
                <ul className="dropdown-menu dropdown-cart" role="menu">
                  <li>
                  <span className="item">
                    <span className="item-left">
                        <img src="http://lorempixel.com/50/50/" alt="" />
                        <span className="item-info">
                            <span>Item name</span>
                            <span>23$</span>
                        </span>
                    </span>
                    <span className="item-right">
                        <button className="btn btn-xs btn-danger pull-right">x</button>
                    </span>
                </span>
                  </li>
                  <li className="divider"/>
                  <li><a className="text-center" href="">View Cart</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
