import React, { Component } from 'react'

const Books = (props) => {
  console.log('*******', props)
  return (
    <div>
        <h1>All books: </h1>
        <ol>
          {props.allBooks.map(book => <li key={book.id}>{book.title}</li>)}
        </ol>
        <h1>{props.allBooks}</h1>
    </div>
  )
}

export default Books
