import React from 'react'
import PropTypes from 'prop-types'

export default function MsgProps(props) {
    return (
        <span>Mensagem : {props.name}</span>
    )
}

MsgProps.propTypes = {
    name : PropTypes.string.isRequired
}


MsgProps.defaultProps = {
    name : 'Default value '
}