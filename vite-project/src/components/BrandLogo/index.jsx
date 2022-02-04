import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ShinyLogo from '../../assets/Shiny-logo.png'
import ShinyLetters from '../../assets/shiny-letters.png'

const Logo = styled.img`
  width: 80px;
`
const BrandWrapper = styled.h2`
  width: 260px;
  height: 97px;
  display: flex;
  align-items: center;
  & > * {
    margin: 1rem;
  }
`

const BrandLogo = (props) => (
  <BrandWrapper>
    <Logo src={ShinyLogo} />
    <img src={ShinyLetters} />
  </BrandWrapper>
)

BrandLogo.propTypes = {}

export default BrandLogo
