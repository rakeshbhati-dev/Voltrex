import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Programs from './sections/Programs'
import About from './sections/About'

function App() {
  return (
    <div className='background-dark text-sans leading-normal'>
      <Navbar />
      <Hero />
      <Programs />
      <About />
    </div>
  )
}

export default App