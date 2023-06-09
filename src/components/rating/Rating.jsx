import React from 'react'
import style from './Rating.module.css'

function Rating(props) {

    const {rating, idLogement} = props
    
    const ratingTab = []
        
    const number = parseInt(rating, 10)

    for (let index = 0; index < number; index++) {
        ratingTab.push(true)
    }

    for (let index = 0; index < 5 - number; index++) {
        ratingTab.push(false)
    }

  return (
    <div className={style.rateContainer}>
        {
            ratingTab.map((element,index) => (
                element === true ? <i key={`${index}-stars-true-${idLogement}`} className="fa-solid fa-star" /> : <i className={`fa-solid fa-star ${style.starGray}`} key={`${index}-stars-false`}/>
            ))
        }
    </div>
  )
}

export default Rating