import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from './Router'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
`
const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  min-width: 100%;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  width: 80%;
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