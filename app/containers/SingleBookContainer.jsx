import { connect } from 'react-redux'
import Book from '../components/Book'

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

const SingleBookContainer = connect(
  mapStateToProps
)(Book)

export default SingleBookContainer
