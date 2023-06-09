import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import style from './Collapse.module.css'

library.add(faAngleUp, faAngleDown)

function Collapse({ title, description }) {

    const [collapseOpen, setCollapseOpen] = useState(true)

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
        <div className={style.divHeader} onClick={() => handleClick()}>
            <span>{title}</span>
            { collapseOpen ? <FontAwesomeIcon icon="fa-solid fa-angle-up" /> : '' }
            { !collapseOpen ? <FontAwesomeIcon icon="fa-solid fa-angle-down" />: '' }
        </div>
        { collapseOpen ? <div className={style.divBody}>{description}</div> : '' }
    </div>
  )
}

export default Collapse