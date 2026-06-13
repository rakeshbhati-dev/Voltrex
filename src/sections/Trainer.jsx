import React from 'react'
import Section from '../components/Section'
import Trainer1 from '../assets/images/trainer-1.jpg'
import Trainer2 from '../assets/images/trainer-2.jpg'
import Trainer3 from '../assets/images/trainer-3.jpg'
import TrainerCard from '../components/TrainerCard'

function Trainer() {
  return (
    <Section
    isDark={false}
    >
        <div className='flex items-center gap-2 justify-center mb-2'>
            <div className='w-[24px] h-[2px] bg-primary'></div>
            <p className='text-primary text-sm font-semibold tracking-widest uppercase'>Meet The Team</p>
            <div className='w-[24px] h-[2px] bg-primary'></div>
        </div>
        <h2 className='text-center text-5xl text-white uppercase font-black tracking-tight mb-10'>Elite Trainers</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <TrainerCard
            image={Trainer1}
            name='Arjun Mehta'
            program='Strength & Powerlifting'
            role='Head Coach'
            />
            <TrainerCard
            image={Trainer2}
            name='Priya Sharma'
            program='Crossfit & Functional'
            role='Crossfit L3'
            />
            <TrainerCard
            image={Trainer3}
            name='David Shaw'
            program='HIIT & Conditioning'
            role='Specialist'
            />
        </div>

    </Section>
  )
}

export default Trainer