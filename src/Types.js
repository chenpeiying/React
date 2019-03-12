import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Types  extends Component {
    render() {
        return (
            <div>
               <h1>hello</h1>
            </div>
        );
    }
}
Types.propTypes = {
    // type:PropTypes.bool.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
}

Types.defaultProps= {
    type:'num',
    name:'react'
}