import React from 'react'
import PropTypes from 'prop-types'
import { LengthMark } from './style'

function index({current, cap}) {
  return (
    <LengthMark current={current} cap={cap}>
        {current} / {cap}
    </LengthMark>
  )
}

index.propTypes = {
    current: PropTypes.number.isRequired,
    cap: PropTypes.number.isRequired
}

export default index