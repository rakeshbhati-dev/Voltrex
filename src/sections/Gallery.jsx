import { useState } from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Dreadmill from '../assets/images/dreadmill.jpg'
import Dumbell from '../assets/images/dumbells.jpg'
import Dumbell2 from '../assets/images/dumbell-2.jpg'
import Interior from '../assets/images/interior.jpg'
import Machines from '../assets/images/machines.jpg'

const images = [Dumbell, Dumbell2, Dreadmill, Machines, Interior]

function Gallery() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <Section isDark={false}>
      <SectionTitle
        label='Inside Voltrex'
        title='The Facility'
      />

      {/* ── MOBILE: carousel ── */}
      <div className="relative mt-10 md:hidden">
        <div className="overflow-hidden h-[280px]">
          <img
            src={images[current]}
            alt=""
            className="w-full h-full object-cover brightness-[0.8]"
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white w-9 h-9 flex items-center justify-center transition-colors duration-200"
        >
          &#8592;
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white w-9 h-9 flex items-center justify-center transition-colors duration-200"
        >
          &#8594;
        </button>

        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === current ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: original grid ── */}
      <div className="hidden md:grid grid-cols-12 grid-rows-[240px_240px] gap-1 mt-10">

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