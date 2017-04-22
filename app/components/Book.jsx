import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// will also import review stuff here

const Book = (props) => {

    return (

    )
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        product: state.products.selected,
        user: state.auth
    };
};
const mapDispatch = { deleteProduct };

export default connect(mapProps, mapDispatch)(Book);
