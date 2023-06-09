import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoWhite } from "../../assets/logo/logo-white.svg";

const FooterHtml = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    width: 100%;
    background-color: black;
`
const StyledLogoWhite = styled(LogoWhite)`
    width: 10em;
`
const StyledParagraphe = styled.p`
    color: white;
`

function Footer() {
  return (
    <FooterHtml>
        <StyledLogoWhite />
        <StyledParagraphe>© 2020 Kasa. All rights reserved</StyledParagraphe>
    </FooterHtml>
  )
}

export default Footer