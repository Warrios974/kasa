import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { ReactComponent as LogoColor } from "../assets/logo/logo-color.svg";

const StyleLogoColor = styled(LogoColor)`
    width: 8em;
`

const HeaderHtml = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    max-width: 1280px;
    width: 80%;
`

function Header() {
  return (
    <HeaderHtml>
        <StyleLogoColor />
        <Navbar />
    </HeaderHtml>
  )
}

export default Header