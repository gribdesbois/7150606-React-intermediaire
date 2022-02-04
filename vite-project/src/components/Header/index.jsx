import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${({ props }) =>
    props?.$isFullLink &&
    `color: white; border-radius: 30; background-color: #5843E4;`}
`
function Header() {
  return (
    <nav>
      <StyledLink to={'/'}>Accueil</StyledLink>
      <StyledLink to={'/survey/1'} $isFullLink>
        {/* //! $ is only required when passing to React Component */}
        Faire le test{/* //! if plain html u can pass isFullLink  */}
      </StyledLink>
      <StyledLink to={'/freelances'}>Profils</StyledLink>
    </nav>
  )
}

export default Header
