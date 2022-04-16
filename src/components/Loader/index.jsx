import React from 'react'
import PropTypes from 'prop-types'
import { LoaderContainer, Spin } from './style'

function index({size, message}) {

    return (
        <LoaderContainer>
            <Spin size={size} />
        </LoaderContainer>
    )
}

index.propTypes = {
    size: PropTypes.string.isRequired,
    message: PropTypes.object
}

export default index