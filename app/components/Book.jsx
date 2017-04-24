
import React from 'react'

// will also import review stuff here
const Book = (props) => {
  console.log(props, 'props')
  const starsForRating = (number, classNameText) => {
    const stars = []
    for (let i = 0; i< number; i++) {
      stars.push(<i key={i} className={classNameText}/>)
    }
    return stars
  }
  return (
    <div className="container-fluid">
      <div className="content-wrapper">
        <div className="item-container">
          <div className="container">
            <div className="col-md-12">
              <div className="product col-md-3 service-image-left">

                <div className="center-image">
                  <img id="item-display" src={props.book.photoUrl} alt=""/>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="product-title">{props.book.title}</div>
              <div className="product-desc">{props.book.description}</div>
              <div className="product-rating">
                {
                  starsForRating(props.book.avgRating, 'fa fa-star gold')
                }
                {
                  starsForRating(5 - props.book.avgRating, 'fa fa-star-o')
                }
              </div>

                <div className="product-price">$ {props.book.priceInCents/100}</div>
                <div className="product-stock">In Stock</div>

                  <div className="btn-group cart">
                    <button type="button" className="btn btn-success">
                      Add to cart
                    </button>
                  </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Book
