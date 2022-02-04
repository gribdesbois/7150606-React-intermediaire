import React from 'react'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.webp'

const Card = ({ label, title, picture }) => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
    <span>{label}</span>
    <img src={picture} alt="freelance" height={80} width={80} />
    <span>{title}</span>
  </div>
)

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: 'Some shiny label',
  title: 'Default Title',
  picture: DefaultPicture,
}

export default Card
