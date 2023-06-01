import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from "../utils/style/colors.js";

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`

function Navbar() {
  return (
    <Nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
    </Nav>
  )
}

export default Navbar