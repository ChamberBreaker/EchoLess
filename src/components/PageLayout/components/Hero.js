import React from 'react'
import Helmet from 'react-helmet'

const Hero = () => (
  <div className='outer'>
    <Helmet link={[{href: 'https://fonts.googleapis.com/css?family=Montserrat:100', rel: 'stylesheet'}]} />
    <h1 className='title'>Echoless<span className='io'>(.io)</span></h1>
  </div>
)

export default Hero
