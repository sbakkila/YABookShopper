
import React from 'react'

// will also import review stuff here
const Book = (props) => {
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
                  <img id="item-display" src={props.book.photoUrl} alt=""/>
              </div>
            </div>

            <div className="col-md-7">
              <div className="product-title">{props.book.title}</div>
              <div className="product-desc">{props.book.authors ? `${props.book.authors[0].firstName} ${props.book.authors[0].lastName}` : 'no author listed'}</div>
              <div className="product-rating">
                {
                  starsForRating(props.book.avgRating, 'fa fa-star gold')
                }
                {
                  starsForRating(5 - props.book.avgRating, 'fa fa-star-o')
                }
              </div>

                <div className="product-price">$ {props.book.priceInCents/100}</div>
                <div className="product-stock">{props.book.inventory > 0 ? 'In Stock' : 'Out of Stock'}</div>

                  <div className="btn-group cart">
                    <button type="button" className={props.book.inventory > 0 ? 'btn btn-success' : 'btn btn-success disabled'} >
                      Add to cart
                    </button>
                  </div>
            </div>

          </div>
        </div>
        <div className="container-fluid">
          <div className="col-md-12 product-info">
            <ul id="myTab" className="nav nav-tabs nav_tabs">

              <li className="active"><a href="#service-one" data-toggle="tab">DESCRIPTION</a></li>
              <li><a href="#service-three" data-toggle="tab">REVIEWS</a></li>

            </ul>
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade in active" id="service-one">

                <section className="container product-info">
                  {props.book.description}
                </section>

              </div>
              <div className="tab-pane fade" id="service-three">
                <section className="container product-info">
                  {/*todo: also return user from review.user_id*/}
                  {
                    props.book.reviews && props.book.reviews.map((review) => {
                      return review.text
                    })
                  }
                </section>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Book
