import React from 'react'
import NotFound from './NotFound'


function Logement() {

const isExist = () => {
    
    return true
}    

if (!isExist()) {
    
    return <NotFound />
}
  
return (
    <div>Logement</div>
  )
}

export default Logement