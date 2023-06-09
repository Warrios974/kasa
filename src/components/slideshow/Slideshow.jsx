import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors.js'
import sizes from '../../utils/style/police.js'

library.add(faChevronLeft, faChevronRight)

const StyledCarrouselContainer = styled.div`
  z-index: 2000;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: .6rem;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 30rem;
  }

`
const StyledCarrouselImages = styled.img`
  z-index: 1000;
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const StyledCarrouselArrow = styled(FontAwesomeIcon)`
  z-index: 1100;
  padding: 0 1rem;
  font-size: 2rem;
  color: ${colors.white};

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

`
const StyledCarrouselPagination = styled.span`
  z-index: 1100;
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 1rem;
  color: ${colors.white};
  font-size: ${sizes.paragraphe};

  @media only screen and (min-width: 768px) {
    display: block;
  }

`

function Slideshow({ pictures, idLogement }) {

  const localPictures = JSON.parse(JSON.stringify(pictures))

  const [picture, setPicture] = useState(localPictures[0])
  const indexPicture = localPictures.findIndex((pic) => pic === picture)

  const [currentIndex, setCurrentIndex] = useState(indexPicture + 1)

  const lengthPictures = localPictures.length
  const currentPicture = localPictures[indexPicture]
  const firstPicture = localPictures[0]
  const lastPicture = localPictures[lengthPictures - 1];

  const onlyOne = pictures.length === 1 ? true : false

  const handleClick = (action) => {
    if (action === 'next') {
      const nextPicture = currentPicture === lastPicture ? firstPicture : localPictures[indexPicture + 1]
      setPicture(nextPicture)
      
      if (currentPicture === lastPicture){ setCurrentIndex(1)}else{setCurrentIndex(currentIndex + 1)}
      
    }
    if (action === 'previous') {
      const nextPicture = currentPicture === firstPicture ? lastPicture : localPictures[indexPicture - 1]
      setPicture(nextPicture)
      if (currentPicture === firstPicture){ setCurrentIndex(lengthPictures)}else{setCurrentIndex(currentIndex - 1)}
    }
  }

  if(onlyOne) return (
    <StyledCarrouselContainer>
      <StyledCarrouselImages 
        src={picture} 
        alt="" 
        loading='lazy'/>
    </StyledCarrouselContainer>
  )

  if(!onlyOne) return (
    <StyledCarrouselContainer>
        <StyledCarrouselArrow 
          icon="fa-solid fa-chevron-left" 
          onClick={() => handleClick('previous')}
          />

        <StyledCarrouselPagination>
          {`${currentIndex}/${lengthPictures}`}
        </StyledCarrouselPagination>
        <StyledCarrouselImages 
        src={picture} 
        alt="" 
        loading='lazy'/>

        <StyledCarrouselArrow 
          icon="fa-solid fa-chevron-right" 
          onClick={() => handleClick('next')}
          />
    </StyledCarrouselContainer>
  )
}

export default Slideshow