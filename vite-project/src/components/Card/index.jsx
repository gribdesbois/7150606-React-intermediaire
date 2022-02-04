import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.webp'
import colors from '../../utils/style/colors'

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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight}
  border-radius: 30px;
  width:350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9
  }
`

const Card = ({ label, title, picture }) => (
  <CardWrapper
    style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}
  >
    <CardLabel>{label}</CardLabel>
    <CardImage src={picture} alt="freelance" height={80} width={80} />
    <span>{title}</span>
  </CardWrapper>
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
