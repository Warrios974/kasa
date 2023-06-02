import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from './Router'
import styled from 'styled-components'
import colors from '../utils/style/colors.js'
//import sizes from '../utils/style/police.js'

const Container = styled.main`
  display: flex;
  justify-content: center;
`
const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  width: 80%;
  color: ${colors.primary};
  max-width: 1280px;
  font-family: 'Montserrat';
`

function Layout() {
  return (
    <Container>
      <Main>
        <Header />
        <Section>
          <Router />
        </Section>
        <Footer />
      </Main>
    </Container>
  )
}

export default Layout