import React, { Fragment } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Clients from './components/Clients'
import Review from './components/Review'


const Home = () => {
  return (
    <Fragment>
        <Hero />
        <About />
       <Features />
       <Clients />
       <Review />
    </Fragment>
  )
}

export default Home