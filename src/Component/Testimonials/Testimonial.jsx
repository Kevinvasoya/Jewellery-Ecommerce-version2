import React from 'react'
import Face from '../Assets/Face.jpg'
import '../Testimonials/Testimonial.css'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Testimonial = () => {
  return (
    <>

      <div className='Testimonial-Fluid'>
        <h1>Client Testimonials</h1>
        <p>What They Say</p>
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
          }}
        >
          <SplideSlide className='Splide' >
            <div className='Testimonial-Card'>
              <div className='Testimonial-Profile'>
                <img src={Face} />
              </div>
              <p>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !</p>
              <h4>Adam Smith / Customer</h4>
            </div>
          </SplideSlide>
          <SplideSlide className='Splide' >
            <div className='Testimonial-Card'>
              <div className='Testimonial-Profile'>
                <img src={Face} />
              </div>
              <p>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !</p>
              <h4>Adam Smith / Customer</h4>
            </div>
          </SplideSlide>
          <SplideSlide className='Splide' >
            <div className='Testimonial-Card'>
              <div className='Testimonial-Profile'>
                <img src={Face} />
              </div>
              <p>All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !</p>
              <h4>Adam Smith / Customer</h4>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  )
}

export default Testimonial