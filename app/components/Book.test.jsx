import React from 'react'
import chai, { expect } from 'chai'
chai.use(require('chai-enzyme')())

import { shallow } from 'enzyme'

import Book from './Book.jsx'
                                                                           
/* global des       cribe it beforeEach */
describe('<Book />', () => {
  let book = {}
                           currentBook = {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'Cherished by all',
    priceInCents: 600,
    inventory: 0,
    photoUrl: 'www.amazon.com',
    isbn: '0156012197',
    avgRating: 4
  }

  let root
  beforeEach('render the root', () => {
    const {kiddybook} = book
    console.log(kiddybook)
    root = shallow(<Book book={kiddybook}/>)
  })

  it.only('shows the book title', () => {
    console.log(root, 'root')
        //   root.setState({ book })
    expect(root.find('div[className="product-title"]')).to.equal('The Little Prince')
  })

  it('shows the author', () => {
        //   root.setState({ book })
    expect(root.find('div[className="product-desc"]')).to.equal('Antoine de Saint-Exupéry')
  })

  it("has an 'Add to Cart' button", () => {
    const cartButton = root.find('button[type="button"]')
    expect(cartButton).to.have.length(1)
  })

  it('allows the user to submit a review', () => {
    const reviewExample = {
      text: 'This is an awesome book',
      rating: 4
    }
  // const reviewWrapper = shallow(<Review fullMessage={aDifferentMessage}/>);
       //  expect(reviewWrapper.find('div[className="product-info"]')).to.have('Antoine de Saint-Exupéry')
  })

    // it('shows all reviews', () => {

    // })
})
