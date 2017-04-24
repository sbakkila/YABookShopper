import { connect } from 'react-redux'
import Books from '../components/Books'

function mapStateToProps(state) {
  return {
    orders: state.orders.list
  }
}

const AllBooksContainer = connect(
  mapStateToProps
)(AllOrders)

export default AllBooksContainer
