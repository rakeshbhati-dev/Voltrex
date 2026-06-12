import React from 'react'
import Section from '../components/Section'
import LeftImage from '../assets/images/about-1.jpg'
import RightImage from '../assets/images/about-2.jpg'
import SectionTitle from '../components/SectionTitle'
import BulletLine from '../components/BulletLine'

function About() {
  return (
    <Section
    isDark={true}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-30'>
        <div className='relative min-h-[560px]'>
          <img src={LeftImage} alt="" 
          className='w-full md:w-[72%] h-[480px] absolute top-0 left-0 object-cover object-center'
          />
          <img src={RightImage} alt="" 
          className='w-[58%] h-[300px] absolute right-0 bottom-0 object-cover object-center'
          />
          <div className='absolute w-[2px] bg-primary h-[100px]'></div>
        </div>
        <div>
          <SectionTitle 
          label='Our Story'
          title={<>Built for <br />Warriors</>}
          />
          <p className='text-gray my-4 tracking-wider'>VOLTREX was built by athletes, for athletes. Since 2015 we've been Pune's most demanding fitness destination — a place where comfort zones go to die and results speak louder than anything else.</p>
          <p className='text-gray my-4 tracking-wider'>
            From Olympic-grade lifting platforms to cutting-edge conditioning zones, every square foot of this facility is engineered for performance.
          </p>
          <div className='grid grid-cols-2 gap-3 mt-10'>
            <BulletLine line='Olympic Lifting Platforms'
            lineStyle='font-semibold tracking-wider uppercase'
            />
            <BulletLine line='Recovery & Cryo Zone'
            lineStyle='font-semibold tracking-wider uppercase'
            />
            <BulletLine line='Nutrition Coaching'
            lineStyle='font-semibold tracking-wider uppercase'
            />
            <BulletLine line='24/7 Access'
            lineStyle='font-semibold tracking-wider uppercase'
            />
            <BulletLine line='Group Classes Daily'
            lineStyle='font-semibold tracking-wider uppercase'
            />
            <BulletLine line='Personal Training'
            lineStyle='font-semibold tracking-wider uppercase'
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About