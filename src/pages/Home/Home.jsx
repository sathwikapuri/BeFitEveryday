import React from 'react'
import FAQS from '../../components/FAQS.jsx'
import Footer from '../../components/Footer.jsx'

import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials.jsx'
import Values from '../../components/Values'
import './Home.css'

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQS/>
      <Testimonials/>
      
    </div>
  )
}

export default Home
