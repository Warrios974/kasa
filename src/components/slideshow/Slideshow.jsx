import React, { useState } from 'react'
import style from './Slideshow.module.css'


function Slideshow({ pictures }) {

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
    <div className={style.divCarrouselContainer}>
      <img 
        className={style.imgCarrousel}
        src={picture} 
        alt="" 
        loading='lazy'/>
    </div>
  )

  if(!onlyOne) return (
    <div className={style.divCarrouselContainer}>
        <i 
          className={`fa-solid fa-chevron-left ${style.iconCarrousel}`}
          onClick={() => handleClick('previous')}
          />

        <span className={style.pagination}>
          {`${currentIndex}/${lengthPictures}`}
        </span>
        <img 
        className={style.imgCarrousel}
        src={picture} 
        alt="" />

        <i 
          className={`fa-solid fa-chevron-right ${style.iconCarrousel}`}
          onClick={() => handleClick('next')}
          />
    </div>
  )
}

export default Slideshow