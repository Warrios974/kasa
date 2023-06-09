import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import colors from "../utils/style/colors.js";
import sizes from '../utils/style/police.js'


const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    font-size: ${sizes.linkPhone};
    ${(props) =>
        props.$active &&
        `text-decoration: underline;`}
`

function Navbar() {

  const { pathname } = useLocation()

  if(pathname === '/') return (
    <Nav>
        <StyledLink to="/" $active>Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
    </Nav>
  )
  if(pathname === '/about') return (
    <Nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about" $active>A propos</StyledLink>
    </Nav>
  )
  return (
    <Nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
    </Nav>
  )
}

export default Navbar