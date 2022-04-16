import React from 'react';
import { Button } from './style';
import PropTypes from 'prop-types'

function index({type = 'button', styleType='active', cornerStyle='basic', children, ...props}) {
  return (
    <Button
      type={type}
      styleType={styleType}
      cornerStyle={cornerStyle}
      {...props}
    >{children}</Button>
  )
}

index.propTypes = {
  type: PropTypes.string,
  styleType: PropTypes.string,
  cornerStyle: PropTypes.string,
  children: PropTypes.any
}

export default index