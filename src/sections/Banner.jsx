import React, { useState } from 'react'
import BannerImage from '../assets/images/banner.jpg'
import Section from '../components/Section'
import Button from '../components/Button'
import FormModal from '../components/FormModal'

function Banner() {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className='bg-background pt-10 relative overflow-hidden'>
        <img src={BannerImage} alt=""
        className='w-full md:h-[480px] object-cover object-[center_30%] brightness-25'
        />
        <div
        className='absolute inset-0 flex flex-col items-center justify-center text-center p-10'
        >
            <h3 className='text-3xl md:lg:text-4xl lg:text-7xl text-white font-black uppercase'>Ready to <br /><span className='text-primary'>Dominate?</span></h3>
            <p className='text-gray tracking-widest text-sm md:text-lg mt-2 '>First week is on us. No commitments. Just results.</p>
            <button
            className='text-white bg-primary py-1 px-3 md:text-xl md:py-3 md:px-6 uppercase font-semibold mt-5 cursor-pointer'
            onClick={()=>setShowModal(true)}
            >
                Claim free trial
            </button>
        </div>
        {
                showModal &&
                <FormModal onClose={()=>setShowModal(false)} />
            }
    </div>
  )
}

export default Banner