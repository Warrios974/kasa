import React, { useEffect, useState } from 'react'

function Home() {

  const [logementsData, setLogementData] = useState([])
  const [logementLoadingData, setLogementLoadingData] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getLogements = async () => {
      try {
        const fetchLogements = await fetch('./data/logement.json')
        const dataLogements = await fetchLogements.json()
        setLogementData(dataLogements)
      } catch (error) {
        console.log('====');
        console.log('error',error);
        console.log('====');
        setError(true)
      }finally{
        setLogementLoadingData(false)
      }
    }
    getLogements()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home