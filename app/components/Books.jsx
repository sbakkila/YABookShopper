import React, { Component } from 'react'

const Books = (props) => {


  
  return (
    <div>
        <h1>All books: </h1>
        <ol>
          {props.allBooks.map(book => {
            return (
              <div class="col-md-3 col-sm-6">
              <span class="thumbnail">
                  <img src={book.photoUrl} alt="..."/>
                  <h4>{book.title}</h4>
                  <div class="ratings">
                          <span class="glyphicon glyphicon-star"></span>
                          <span class="glyphicon glyphicon-star"></span>
                          <span class="glyphicon glyphicon-star"></span>
                          <span class="glyphicon glyphicon-star"></span>
                          <span class="glyphicon glyphicon-star-empty"></span>
                      </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <hr class="line"/>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <p class="price">{book.price}</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                    <a href="http://cookingfoodsworld.blogspot.in/" target="_blank" >
                        <button class="btn btn-info right" > BUY ITEM</button>
                    </a>
                    </div>
                    
                  </div>
              </span>
            </div>
            ) 
})
          }
        </ol>

    </div>




  )
}

export default Books
