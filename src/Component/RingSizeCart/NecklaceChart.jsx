import React from 'react'
import './SizeChart.css'
import NecklaceSize from '../Assets/Stone-Gallery/Charts/NecklaceSize.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const NecklaceChart = () => {
  return (
    <>
      <Navbar/>
        <h1 className='Size-Header'>Necklace Size Chart</h1>
        <div className='Size-Image'>
          <img src={NecklaceSize} />
        </div>
      <Footer/>
    </>
  )
}

export default NecklaceChart