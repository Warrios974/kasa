import React, { useState } from 'react'
import style from './Collapse.module.css'

function Collapse({ title, description, idLogement }) {

    const [collapseOpen, setCollapseOpen] = useState(false)

    const type = typeof(description)

    const ListEquipements = () => {

        return(
            <ul>
                {
                    description.map((equipement, index) => (
                        <li key={`${index}-${idLogement}`}>{equipement}</li>
                    ))
                }
            </ul>
        )
    }

    const handleClick = () => {
        if (collapseOpen === false) {
            setCollapseOpen(true)
            return
        }
        
        if (collapseOpen === true) {
            setCollapseOpen(false)
            return
        }
    }

    return (
    <div className={style.divContainer}>
        <div 
            className={collapseOpen ? style.divHeaderOpen : style.divHeader} 
            onClick={() => handleClick()}
        >
            <span>{title}</span>
            { collapseOpen ? <i className="fa-solid fa-angle-up" /> : '' }
            { !collapseOpen ? <i className="fa-solid fa-angle-down" />: '' }
        </div>
        {collapseOpen ?
            <div className={collapseOpen ? style.animationDown : style.divBody}>
                {
                type === 'object' ? <ListEquipements /> : description
                }
            </div>
        : ''}
    </div>
  )
}

export default Collapse