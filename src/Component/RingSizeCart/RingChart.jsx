import React from 'react'
import './SizeChart.css'
import RingSize from '../Assets/Stone-Gallery/Charts/RingSize.webp'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const RingChart = () => {
  return (
    <>
      <Navbar/>
      <h1 className='Size-Header'>Rings Size Chart</h1>
      <div className='Size-Image'>
        <img src={RingSize} />
      </div>
      <Footer/>
    </>
  )
}

export default RingChart