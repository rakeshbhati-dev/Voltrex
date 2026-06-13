import React from 'react'

function TrainerCard({
    image,
    name,
    role,
    program
}) {
  return (
    <div className='overflow-hidden bg-dark'>
        <div className='overflow-hidden relative h-[340px] group'>
            <img src={image} alt=""
            className='w-full h-full object-cover object-top transition-transform duration-350 grayscale-[30%] group-hover:scale-[1.04]'
            />
            <span className='absolute top-5 right-5 bg-primary text-xs text-white tracking-widest font-semibold uppercase px-3 py-1'>{role}</span>
        </div>
        <div className='py-3 px-5 border-t-2 border-primary'>
            <h3 className='text-white text-4xl font-black uppercase mb-2'>{name}</h3>
            <p className='text-sm text-primary tracking-wider font-bold'>{program}</p>
        </div>
    </div>
  )
}

export default TrainerCard