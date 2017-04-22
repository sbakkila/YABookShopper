import React, { Component } from 'react'

const Books = (props) => {

  return (

    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-md-9">
            <h3>Books</h3>
          </div>
        </div>
        <div className="item active">
          <div className="row">
            {
              props.allBooks && props.allBooks.map( (book, idx) => {
                return (
                  <div key={book.id} className="col-sm-3">
                    <div className="col-item" >
                      <div className="photo">
                        <img src={book.photoUrl} className="img-responsive" alt="a" />
                      </div>
                      <div className="info">
                        <div className="row">
                          <div className="price col-md-6">
                            <h5>{book.title}</h5>
                            <h5 className="price-text-color">{book.priceInCents}</h5>
                            <h5 className="price-text-color">{book.authors[0] ? props.allBooks[idx].authors[0].firstName : 'no author listed'}</h5>

                          </div>
                          <div className="rating hidden-sm col-md-6">
                            <i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
                          </i><i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
                          </i><i className="fa fa-star"></i>
                          </div>
                        </div>
                        <div className="separator clear-left">
                          <p className="btn-add">
                            <i className="fa fa-shopping-cart"></i><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                          <p className="btn-details">
                            <i className="fa fa-list"/><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                        </div>
                        <div className="clearfix">
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Books
