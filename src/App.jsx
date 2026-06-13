import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Programs from './sections/Programs'
import About from './sections/About'
import Trainer from './sections/Trainer'
import Plans from './sections/Plans'
import Gallery from './sections/Gallery'
import Banner from './sections/Banner'
import Footer from './sections/Footer'

function App() {
  return (
    <>
    
    <div className='bg-dark text-sans leading-normal scroll-smooth'>
       <Navbar />
      <Hero />
      <Programs />
      <About />
      <Trainer />
      <Plans />
      <Gallery />
      <Banner />
      <Footer />
    </div>
    </>
  )
}

export default App