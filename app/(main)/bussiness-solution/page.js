import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Order from './components/Order'
import Payment from './components/Payment'
import Platform from './components/Platform'

const page = () => {
  return (
     <>
     <Hero />
     <About />
     <Product />
     <Order />
     <Payment />
     <Platform />
     </>
  )
}

export default page