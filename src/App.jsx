import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Programs from './sections/Programs'
import About from './sections/About'
import Trainer from './sections/Trainer'
import Plans from './sections/Plans'

function App() {
  return (
    <div className='background-dark text-sans leading-normal'>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Trainer />
      <Plans />
    </div>
  )
}

export default App