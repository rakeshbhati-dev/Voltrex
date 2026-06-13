import React from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ProgramCard from '../components/ProgramCard'
import HIIT from '../assets/images/hiit.jpg'
import LIFTING from '../assets/images/lifting.jpg'
import POWER from '../assets/images/power-lifting.jpg'
import YOGA from '../assets/images/yoga.jpg'

function Programs() {
  return (
    <Section>
      <div className='flex flex-wrap gap-4 justify-between items-end mb-10'>
        <SectionTitle
          label='What we offer'
          title={<>Training <br />Programs</>}
        />
        <Button 
        title='All Programs &#8594;' 
        buttonStyle='bg-transparent border border-gray cursor-pointer hover:bg-primary hover:border-primary text-white'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        <ProgramCard
        image={POWER}
        label='strength'
        title='Power lifting'
        description='Build raw strength with compound lifts'
        />
        <ProgramCard
        image={HIIT}
        label='Cardio'
        title='HIIT BLAST'
        description='High-intensity intervals for fat burning'
        />
        <ProgramCard
        image={LIFTING}
        label='CROSSFIT'
        title='IRON CROSS'
        description='Functional fitness for total conditioning'
        />
        <ProgramCard
        image={YOGA}
        label='Recovery'
        title='Power Yoga'
        description='Flexibility, balance, and mental strength'
        />
      </div>

    </Section>
  )
}

export default Programs