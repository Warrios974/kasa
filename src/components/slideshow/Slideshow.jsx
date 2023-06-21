import React, { useState } from 'react'
import style from './Slideshow.module.css'


function Slideshow({ pictures }) {

  const localPictures = JSON.parse(JSON.stringify(pictures))


  const lengthPictures = localPictures.length - 1
  const [currentIndex, setCurrentIndex] = useState(0)
  const firstPicture = 0
  const lastPicture = lengthPictures;

  const onlyOne = pictures.length === 1 ? true : false

  const handleClick = (action) => {
    if (action === 'next') {
      
      if (currentIndex === lastPicture){ 
        setCurrentIndex(0)
      }else{
        setCurrentIndex(currentIndex + 1)
      }
      
    }
    if (action === 'previous') {

      if (currentIndex === firstPicture){ 
        setCurrentIndex(lengthPictures)
      }else{
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  if(onlyOne) return (
    <div className={style.divCarrouselContainer}>
      <img 
        className={style.opacityOne}
        src={localPictures[0]} 
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
          {`${currentIndex + 1}/${localPictures.length}`}
        </span>

        {
          localPictures.map((image, index) => (
            <img 
              className={currentIndex === index ? style.opacityOne : style.imgCarrousel}
              key={`${index}-piture`}
              id={`${index + 1}`}
              src={image} 
              alt="" />
          ))
        }

        <i 
          className={`fa-solid fa-chevron-right ${style.iconCarrousel}`}
          onClick={() => handleClick('next')}
          />
    </div>
  )
}

export default Slideshow