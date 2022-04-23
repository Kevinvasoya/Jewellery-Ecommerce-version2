import React from 'react'
import '../App.css'
import Navbar from "../Component/Navbar/Navbar"
import Slider from "../Component/Slider/Slider"
import ProductDisplay from  "../Component/Product-Display/ProductDisplay"
import Arrival from "../Component/Arrival/Arrival"
import CategoryPoster from "../Component/Category-Poster/CategoryPoster"
import OurProduct from "../Component/OurProduct/OurProduct"
import Footer from '../Component/Footer/Footer'

const Home = () => {
    return (
        <>
          <Navbar/>
          <Slider/>
          <ProductDisplay/>
          <Arrival/>
          <CategoryPoster/>
          <OurProduct/>
          <Footer/>
        </>
    )
}

export default Home