import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.webp'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`

const CardImage = styled.img`
  height: 80px;
  width: 80 px;
  border-radius: 50%;
`

const Card = ({ label, title, picture }) => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
    <CardLabel>{label}</CardLabel>
    <CardImage src={picture} alt="freelance" height={80} width={80} />
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
