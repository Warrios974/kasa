import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/logement.json'
import Slideshow from '../../components/slideshow/Slideshow'
import Tag from '../../components/tag/Tag'
import Collapse from '../../components/collapse/Collapse'
import style from './Logement.module.css'
import Rating from '../../components/rating/Rating'

function Logement() {

    const navigate = useNavigate()

    const { id } = useParams()

    const logement = data.filter((logement) => logement.id === id)
    
    useEffect(() => {
        
        if (logement.length === 0) {
            navigate("/404")
        }
        
    }, [])

    if(logement.length === 0){
        return(
            <div></div>
        )
    }

    const currentLogement = logement[0]

    const { idLogement, title, cover, pictures, description, host, rating, location, equipments, tags} = currentLogement

    const splitName = host.name.split(' ')
    const firstName = splitName[0]
    const lastName = splitName[1]

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
                    <Tag tags={tags}/>
                </div>
                <div className={style.rateAndHostContainer}>
                    <Rating 
                        rating={rating} 
                        idLogement={idLogement}
                        />
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
                        idLogement={idLogement}
                        />
                    <Collapse 
                        title={'Equipements'}
                        description={equipments}
                        idLogement={idLogement}
                        />
                </div>
            </div>
        </>
    )
}

export default Logement