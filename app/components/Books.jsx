import React, { Component } from 'react'

const Books = (props) => {
  console.log('*******', props)
  return (
    <div>
        <h1>All books: </h1>
        <h1>{props.list}</h1>
    </div>
  )
}

export default Books
