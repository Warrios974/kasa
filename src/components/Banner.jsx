import React from 'react'
import styled from 'styled-components'
import sizes from '../utils/style/police.js'
import colors from '../utils/style/colors.js'
import backgroundBanner from '../assets/image/background-banner-home.png'

const StyledSection = styled.section`
    width: 100%;
    border-radius: 1rem;
    text-align: center;
    background-image: 
      linear-gradient(
        rgba(0,0,0, 0.6), 
        rgba(0,0,0, 0.6)
      ),
      url(${backgroundBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const StyleTitle = styled.h1`
    font-size: ${sizes.header};
    color: ${colors.white};
    font-weight: 100;
    padding: 2rem 0;
`

function Banner() {
  return (
    <StyledSection>
        <StyleTitle>Chez vous, partout et ailleurs</StyleTitle>
    </StyledSection>
  )
}

export default Banner