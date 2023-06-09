import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../utils/style/colors.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp, faAngleDown)

const open = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(100%);
  }
`
const StyledContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
`
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: .3rem;
    padding: .5rem 1rem;
`
const StyledBody = styled.div`
    color: ${colors.primary}; 
    padding: 1rem;
    animation: ${open} 2ms linear;
    text-align: left;
    background-color: ${colors.background};
    > ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

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
    <StyledContainer>
        <StyledHeader onClick={() => handleClick()}>
            <span>{title}</span>
            { collapseOpen ? <FontAwesomeIcon icon="fa-solid fa-angle-up" /> : '' }
            { !collapseOpen ? <FontAwesomeIcon icon="fa-solid fa-angle-down" />: '' }
        </StyledHeader>
        { collapseOpen ? <StyledBody>{description}</StyledBody> : '' }
    </StyledContainer>
  )
}

export default Collapse