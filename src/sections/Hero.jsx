import React from 'react'
import HeroBg from '../assets/images/hero-bg.jpg'
import Button from '../components/Button'
import Stats from '../components/Stats'

function Hero() {
    return (
        <div
            className='min-h-[90vh] w-full relative flex md:items-end items-center'
        >
            <img src={HeroBg} alt="Voltrex Background"
                className='absolute w-full h-full inset-0 object-cover object-center-top brightness-40'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-dark to-dark/60'></div>
            <div className='relative px-10 md:pb-[80px] max-w-[860px]'>
                <h3 className='uppercase tracking-wider text-sm text-primary font-semibold mt-5 tracking-widest border-l-3 border-primary pl-3'>Pune's Elite Fitness Studio</h3>
                <h1 className='text-5xl md:text-7xl lg:text-8xl text-white font-black'>VOLTREX YOUR <br />
                <em className='text-primary'>POWER</em>
                 </h1>
                 <p className='text-gray tracking-widest max-w-[480px] mt-5'>No excuses. No shortcuts. Just relentless work — every day, every rep, every set. Your transformation starts here.</p>
                 <div className='flex gap-4 mt-7 z-20'>
                   <a href="#footer" className='z-20'>
                     <Button 
                 title='Start training'
                 buttonStyle='md:py-4 text-white cursor-pointer'
                 />
                   </a>
                 <a href="#programs" className='z-20'>
                    <Button 
                 title='View Programs'
                 buttonStyle='text-white bg-transparent border border-gray md:py-4 hover:bg-primary hover:border-primary cursor-pointer'
                 />
                 </a>
                 </div>
            </div>
            <div className='absolute md:right-20 left-5 md:bottom-20 bottom-10 flex md:flex-col gap-5'>
                <Stats 
                heading='2400+'
                subHeading='Active Members'
                />
                <Stats 
                heading='18'
                subHeading='Expert Trainers'
                />
                <Stats 
                heading='99%'
                subHeading='Success Rate'
                />
            </div>
        </div>
    )
}

export default Hero