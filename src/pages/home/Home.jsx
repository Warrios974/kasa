import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import data from '../../data/logement.json'
import style from './Home.module.css'

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
      <section className={style.sectionContainer}>
      { data.map((logement) => (
              <Card 
                key={`${logement.id}-logement`}
                card={logement}  />
          ))
        }

      </section>
    </>
  )
}

export default Home