import React from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Dreadmill from '../assets/images/dreadmill.jpg'
import Dumbell from '../assets/images/dumbells.jpg'
import Dumbell2 from '../assets/images/dumbell-2.jpg'
import Interior from '../assets/images/interior.jpg'
import Machines from '../assets/images/machines.jpg'

function Gallery() {
  return (
    <Section
      isDark={false}
    >
      <SectionTitle
        label='Inside Voltrex'
        title='The Facility'
      />
      <div className="grid grid-cols-12 grid-rows-[240px_240px] gap-1 mt-10">

        <div className="col-start-1 col-end-5 row-start-1 row-end-3 overflow-hidden relative group">
          <img
            src={Dumbell}
            alt=""
            className="w-full h-full object-cover brightness-[0.8] transition-all duration-[350ms] group-hover:brightness-100 group-hover:scale-105"
          />
        </div>

        <div className="col-start-5 col-end-8 row-start-1 overflow-hidden relative group">
          <img
            src={Dumbell2}
            alt=""
            className="w-full h-full object-cover brightness-[0.8] transition-all duration-[350ms] group-hover:brightness-100 group-hover:scale-105"
          />
        </div>

        <div className="col-start-8 col-end-13 row-start-1 overflow-hidden relative group">
          <img
            src={Dreadmill}
            alt=""
            className="w-full h-full object-cover brightness-[0.8] transition-all duration-[350ms] group-hover:brightness-100 group-hover:scale-105"
          />
        </div>

        <div className="col-start-5 col-end-9 row-start-2 overflow-hidden relative group">
          <img
            src={Machines}
            alt=""
            className="w-full h-full object-cover brightness-[0.8] transition-all duration-[350ms] group-hover:brightness-100 group-hover:scale-105"
          />
        </div>

        <div className="col-start-9 col-end-13 row-start-2 overflow-hidden relative group">
          <img
            src={Interior}
            alt=""
            className="w-full h-full object-cover brightness-[0.8] transition-all duration-[350ms] group-hover:brightness-100 group-hover:scale-105"
          />
        </div>

      </div>
    </Section>
  )
}

export default Gallery