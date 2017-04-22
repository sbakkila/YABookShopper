import { connect } from 'react-redux'
import Books from '../components/Books'

function mapStateToProps(state) {
  return {
    allBooks: state.books.list
  }
}

const AllBooksContainer = connect(
  mapStateToProps
)(Books)

export default AllBooksContainer
