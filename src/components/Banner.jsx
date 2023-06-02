import React from 'react'
import styled from 'styled-components'
import sizes from '../utils/style/police.js'
import colors from '../utils/style/colors.js'

const StyledSection = styled.section`
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    width: 100%;
    height: 7rem;
    border-radius: .6rem;
    text-align: left;
    overflow: hidden;

    @media only screen and (min-width: 768px) {
        height: 15rem;
        justify-content: center;
    }

`
const StyledCover = styled.img`
    z-index: 1000;
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const StyledImgFilter = styled.div`
    z-index: 1100;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%);
`

const StyleTitle = styled.h1`
    z-index: 1200;
    width: 66%;
    font-size: ${sizes.headerPhone};
    color: ${colors.white};
    font-weight: 400;
    padding: 1rem 1rem;

    @media only screen and (min-width: 768px) {
        font-size: ${sizes.header};
        text-align: center;
        font-weight: 100;
        width: 90%;
        padding: 2rem 0;
    }

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