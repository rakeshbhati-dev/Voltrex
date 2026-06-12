import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Programs from './sections/Programs'

function App() {
  return (
    <div className='background-dark text-sans leading-normal'>
      <Navbar />
      <Hero />
      <Programs />
    </div>
  )
}

export default App