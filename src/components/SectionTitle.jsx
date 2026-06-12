import React from 'react'

function SectionTitle({
    label,title
}) {
  return (
    <div>
        <h4 className='text-primary text-sm font-semibold tracking-widest uppercase mb-3'>{label}</h4>
        <h2 className='text-5xl text-white uppercase font-black tracking-tight'>{title}</h2>
    </div>
  )
}

export default SectionTitle