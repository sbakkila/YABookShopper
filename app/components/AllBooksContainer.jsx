import { connect } from 'react-redux'
import Books from './Books'
import { receiveBooks, loadBooks } from './action-creators'

const mapStateToProps = state => ({
  allBooks: state.allBooks
})

export default connect(
  mapStateToProps
)(Books)
