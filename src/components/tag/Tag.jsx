import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import sizes from '../../utils/style/police'

const StyledTag = styled.span`
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: ${sizes.paragraphePhone};
    margin-right: 1rem;
    margin-top: .5rem;
    padding: .3rem 2rem;
    border-radius: .6rem;
    display: block;
`

function Tag({ tag }) {
  return (
    <StyledTag>{tag}</StyledTag>
  )
}

export default Tag