import React, { useEffect } from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import colors from '../../utils/style/colors.js'
import data from '../../data/logement.json'

const StyledSection = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  
  background-color: ${colors.white};
  border-radius: .6rem;
  flex-wrap: wrap;
  gap: 2rem;
  flex-direction: row;
  padding: 0;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
    background-color: ${colors.background};
  }

`

function Home() {

  useEffect(() => {
    const getLogements = async () => {
      
    }
    getLogements()
  }, [])


  const propsBanner = {
    title : 'Chez vous, partout et ailleurs',
    background: '/image/background-banner-home.png'
  }

  return (
    <>
      <Banner propsBanner={propsBanner}/>
      <StyledSection>
      { data.map((logement) => (
              <Card 
                key={`${logement.id}-logement`}
                card={logement}  />
          ))
        }

      </StyledSection>
    </>
  )
}

export default Home