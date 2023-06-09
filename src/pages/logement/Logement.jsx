import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/logement.json'
import Slideshow from '../../components/slideshow/Slideshow'
import styled from 'styled-components'
import sizes from '../../utils/style/police'
import Tag from '../../components/tag/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors'
import Collapse from '../../components/collapse/Collapse'

library.add(faStar)

const SlyledSectionInfo = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    > div:first-child{
        width: 100%;

        @media only screen and (min-width: 768px) {
            width: 50%;
        }

    }
`
const SlyledTitle = styled.h2`
    font-size: ${sizes.headerPhone};
    font-weight: 100;
`
const SlyledSubTitle = styled.span`
    font-size: ${sizes.subTitlePhone};
    
`
const SlyledSectionTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: .5rem;
`
const SlyledSectionRateAndHost = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media only screen and (min-width: 768px) {
        flex-direction: column-reverse;
        align-items: end;
        justify-content: center;
        width: 50%;
    }

`
const SlyledRate = styled.div`
    margin: 1rem 0;
    font-size: ${sizes.starsPhone};

    @media only screen and (min-width: 768px) {
        font-size: ${sizes.stars};
    }

`
const SlyledHost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    > div:first-child {
        font-size: ${sizes.paragraphePhone};
        margin-right: .5rem;
        text-align: right;
    }
    
    > div:last-child {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;
        > img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        > div:first-child {
            font-size: ${sizes.paragraphe};
        }
        > div:last-child {
            width: 4rem;
            height: 4rem;
        }
    }

`
const FontAwesomeIconGray = styled(FontAwesomeIcon)`
    color: ${colors.background};
`
const StyledSectionCollapse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    > div{
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2%;
        > div{
            width: 50%;
        }
    }

`

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
                <SlyledSectionInfo>
                    <div>
                        <SlyledTitle>{title}</SlyledTitle>
                        <SlyledSubTitle>{location}</SlyledSubTitle>
                        <SlyledSectionTags>
                            {
                                tags.map((tag, index) => (
                                <Tag 
                                    key={`${index}-tag`}
                                    tag={tag}
                                    />
                                ))
                            }
                        </SlyledSectionTags>
                    </div>
                    <SlyledSectionRateAndHost>
                        <SlyledRate>
                            {
                                ratingTab.map((element,index) => (
                                    element === true ? <FontAwesomeIcon key={`${index}-stars-true-${idLogement}`} icon="fa-solid fa-star" /> : <FontAwesomeIconGray key={`${index}-stars-false`} icon="fa-solid fa-star"/>
                                ))
                            }
                        </SlyledRate>
                        <SlyledHost>
                            <div>
                                <div>{firstName}</div>
                                <div>{lastName}</div>
                            </div>
                            <div>
                                <img src={host.picture} alt={host.name} />
                            </div>
                        </SlyledHost>
                    </SlyledSectionRateAndHost>
                    <StyledSectionCollapse>
                        <Collapse 
                            title={'Description'}
                            description={description}
                            />
                        <Collapse 
                            title={'Equipements'}
                            description={listEquipements()}
                            />
                    </StyledSectionCollapse>
                </SlyledSectionInfo>
            </>
        )
    }
}

export default Logement