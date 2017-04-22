import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Book } from '../components/Book'

const mapProps = (state) => {
    return {

    };
};
// const mapDispatch -- might need this later

export default connect(mapProps, null)(Book)
