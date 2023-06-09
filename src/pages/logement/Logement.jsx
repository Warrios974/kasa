import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/logement.json'
import Slideshow from '../../components/slideshow/Slideshow'
import Tag from '../../components/tag/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../../components/collapse/Collapse'
import style from './Logement.module.css'

library.add(faStar)

function Logement() {

    const navigate = useNavigate()

    const { id } = useParams()

    const logement = data.filter((logement) => logement.id === id)
    
    useEffect(() => {
        if (logement.length === 0) {
            //<Navigate to="/404" replace={true} />
            navigate("/404")
        }
    }, [])

    if(logement.length > 0){

        const currentLogement = logement[0]

        const { idLogement, title, cover, pictures, description, host, rating, location, equipments, tags} = currentLogement

        const splitName = host.name.split(' ')
        const firstName = splitName[0]
        const lastName = splitName[1]

        const ratingTab = []

        const ratingStars = () => {
            
            const number = parseInt(rating, 10)

            for (let index = 0; index < number; index++) {
                ratingTab.push(true)
            }

            for (let index = 0; index < 5 - number; index++) {
                ratingTab.push(false)
            }

            return ratingTab
        }

        const listEquipements = () => {

            return(
                <ul>
                    {
                        equipments.map((equipement, index) => (
                            <li key={`${index}-${idLogement}`}>{equipement}</li>
                        ))
                    }
                </ul>
            )
        }

        ratingStars()

        return (
            <>
                <Slideshow 
                    pictures={pictures}
                    idLogement={idLogement}
                />
                <div className={style.sectionInfoContainer}>
                    <div>
                        <h3 className={style.title}>{title}</h3>
                        <span className={style.subTitle}>{location}</span>
                        <div className={style.tagContainer}>
                            {
                                tags.map((tag, index) => (
                                <Tag 
                                    key={`${index}-tag`}
                                    tag={tag}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className={style.rateAndHostContainer}>
                        <div className={style.rateContainer}>
                            {
                                ratingTab.map((element,index) => (
                                    element === true ? <FontAwesomeIcon key={`${index}-stars-true-${idLogement}`} icon="fa-solid fa-star" /> : <FontAwesomeIcon className={style.starGray} key={`${index}-stars-false`} icon="fa-solid fa-star"/>
                                ))
                            }
                        </div>
                        <div className={style.hostContainer}>
                            <div>
                                <div>{firstName}</div>
                                <div>{lastName}</div>
                            </div>
                            <div>
                                <img src={host.picture} alt={host.name} />
                            </div>
                        </div>
                    </div>
                    <div className={style.collapseContainer}>
                        <Collapse 
                            title={'Description'}
                            description={description}
                            />
                        <Collapse 
                            title={'Equipements'}
                            description={listEquipements()}
                            />
                    </div>
                </div>
            </>
        )
    }
}

export default Logement