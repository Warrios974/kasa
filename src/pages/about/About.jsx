import React from 'react'
import styled from 'styled-components'
import Collapse from '../../components/collapse/Collapse'
import Banner from '../../components/banner/Banner'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem 0;  
  
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 1rem 0;  
  }
`

function About() {

  const propsBanner = {
    title : '',
    background: '/image/background-banner-about.png'
  }

  const collapses = [
    {
      title : 'Fiabilité',
      description : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title : 'Respect',
      description : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title : 'Service',
      description : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title : 'Sécurité',
      description : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

return (
  <>
      <Banner propsBanner={propsBanner} />
      <StyledSection>
        {
          collapses.map((collapse) => (
            <Collapse 
              key={`${collapse.title}`}
              title={collapse.title}
              description={<span>{collapse.description}</span>}
            />
          ))
        }
      </StyledSection>
  </>
)
}

export default About