import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './style'
import { Heading, Span } from '../../style/elements/Typoghaphy/style'

function index({label, value, extraInformations}) {
  return (
    <Card>
      {label ? <Heading level={5}>{label}</Heading> : null}
      <Span>{value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Span>
      {extraInformations ? <Span>{extraInformations}</Span> : null}
    </Card>
  )
}

index.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  extraInformations: PropTypes.string
}

export default index