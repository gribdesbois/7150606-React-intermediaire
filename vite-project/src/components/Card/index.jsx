import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ label, title, picture }) => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
    <span>{label}</span>
    <img src={picture} alt="freelance" height={80} width={80} />
    <span>{title}</span>
  </div>
)

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

export default Card
