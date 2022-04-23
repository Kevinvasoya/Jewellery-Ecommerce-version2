import React from 'react'
import '../Arrival/Arrival.css'
import Card from '../OurProduct/Card'
const Arrival = () => {
  return (
    <>

      <div className='tw-Arrival'>
        <h1>New Arrivals</h1>
        <p>Add new arrivals to weekly lineup</p>
        <div className='tw-Arrival-Category-btn'>
          <button className='Arr-click' >Bracelates</button>
          <button className='Arr-click' >Necklace</button>
          <button className='Arr-click' >Earings</button>
        </div>
        <div className='tw-Arrival-Product-Card-Area'>
          <Card/>
          
         
        </div>
      </div>
    </>

  )
}

export default Arrival