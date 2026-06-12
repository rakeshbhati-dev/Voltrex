import React from 'react'
import Button from './Button'

function ProgramCard({
    image,
    title,
    label,
    description
}) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden cursor-pointer group">
    <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-35 group-hover:scale-105"
    />

    <div className="absolute bottom-0 left-0 right-0 p-[28px_24px] bg-gradient-to-t from-black/90 to-transparent">
        <div className='uppercase bg-primary text-white font-bold text-xs px-4 py-2 inline-block tracking-wider'>
            {label}
        </div>

        <h3 className="text-white text-[26px] font-black uppercase mb-1">
            {title}
        </h3>

        <p className="text-gray text-sm">
            {description}
        </p>
    </div>
</div>
  )
}

export default ProgramCard