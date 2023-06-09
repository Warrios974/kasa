import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import sizes from '../../utils/style/police.js'

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: end;
  border-radius: .6rem;
  overflow: hidden;
  position: relative;
  text-align: left;
  font-size: ${sizes.paragraphe};

  @media only screen and (min-width: 768px) {
    width: 29%;
    height: 20rem;
  }

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
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0.3) 100%);
`
const StyledTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  margin-left: 1rem;
  color: ${colors.white};
  font-weight: 100;
`
function Card(props) {

  const { id, title, cover} = props.card

  return (
    <StyledLink to={`/logement/${id}`} >
      <StyledImgFilter />
      <StyledCover src={cover} alt={title}/>
      <StyledTitle>{title}</StyledTitle>
    </StyledLink>
  )
}

export default Card