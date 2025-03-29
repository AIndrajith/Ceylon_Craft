import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import Hero from '../../components/hero-section/Hero'
import Title from '../../components/title/Title'
import LatestCollections from '../../components/latest-collections/LatestCollections'
import BestSeller from '../../components/best-seller/BestSeller'
import OurPolicy from '../../components/our-policy/OurPolicy'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <LatestCollections/>
        <BestSeller/>
        <OurPolicy/>
    </div>
  )
}

export default Home
