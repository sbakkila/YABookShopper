import React, { Component } from 'react'

const Books = (props) => {
  console.log('*******', props)
  return (
    <div>
        <h1>All books: </h1>
        {props.allBooks.map(book => {
          <ol>
          <li>{book.title}</li>
          <li>{book.price}</li>
          </ol>
        })}
        <h1>{props.allBooks}</h1>
    </div>
  )
}

export default Books
