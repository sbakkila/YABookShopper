import { connect } from 'react-redux'
import Books from '../components/Books'

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  }
}

// function mapDispatchToProps(dispatch) {
// }

const AllBooksContainer = connect(
  mapStateToProps
)(Books)

export default AllBooksContainer
