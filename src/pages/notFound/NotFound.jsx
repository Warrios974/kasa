import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import sizes from '../../utils/style/police.js'

const StyledNotFound = styled.span`
  font-size: ${sizes.notFoundPhone};
  font-weight: 700;
  
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 1rem 0;  
    font-size: ${sizes.notFound};
  }
`
const StyledInstruction = styled.span`
  font-size: ${sizes.subTitlePhone};
  
  @media only screen and (min-width: 768px) {
    font-size: ${sizes.subTitle};
  }
`
const StyledLink = styled(Link)`
  margin: 4rem 0;
  color: ${colors.primary};
    font-size: ${sizes.linkPhone};
`


function NotFound() {
  return (
    <>
      <StyledNotFound>
        404
      </StyledNotFound>
      <StyledInstruction>
        Oups! La page que vous demandez n'existe pas.
      </StyledInstruction>
      <StyledLink to={`/`}>
        Retourner sur la page d’accueil
      </StyledLink>
    </>
  )
}

export default NotFound