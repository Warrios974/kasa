import React from 'react'
import styled from 'styled-components'
import sizes from '../utils/style/police.js'
import colors from '../utils/style/colors.js'

const StyledSection = styled.section`
    position: relative;
    width: 100%;
    height: 15rem;
    border-radius: 1rem;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
`
const StyledCover = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const StyledImgFilter = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
`

const StyleTitle = styled.h1`
    width: 100%;
    position: absolute;
    top: 0;
    font-size: ${sizes.header};
    color: ${colors.white};
    font-weight: 100;
    padding: 2rem 0;
`

function Banner({ propsBanner }) {

    const { title, background } = propsBanner

  return (
    <StyledSection>
        <StyledImgFilter />
        <StyledCover src={background} alt=''/>
        {
            title !== '' &&
            <StyleTitle>Chez vous, partout et ailleurs</StyleTitle>
        }
    </StyledSection>
  )
}

export default Banner