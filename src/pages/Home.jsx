import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Card from '../components/Card'
import data from '../data/logement.json'
import colors from '../utils/style/colors.js'

const StyledSection = styled.section`
  margin: 2rem 0;
  display: flex;
  background-color: ${colors.background};
  border-radius: 1rem;
  flex-wrap: wrap;
  gap: 3%;
  flex-direction: row;
  padding: 3rem;
`

function Home() {

  useEffect(() => {
    const getLogements = async () => {
      
    }
    getLogements()
  }, [])

  return (
    <>
      <Banner />
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