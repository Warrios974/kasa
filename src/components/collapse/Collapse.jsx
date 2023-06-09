import React, { useState } from 'react'
import style from './Collapse.module.css'

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
            { collapseOpen ? <i className="fa-solid fa-angle-up" /> : '' }
            { !collapseOpen ? <i className="fa-solid fa-angle-down" />: '' }
        </div>
        { collapseOpen ? <div className={style.divBody}>{description}</div> : '' }
    </div>
  )
}

export default Collapse