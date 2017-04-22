import React, { Component } from 'react' 
import axios from 'axios'

export default class Books extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount(){
  //   this.props.loadBooks()
  // }

  render() {
    console.log(this.props, 'props')
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}
