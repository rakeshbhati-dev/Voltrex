import React from 'react'

function SectionTitle({
    label,title
}) {
  return (
    <div>
        <h4 className='text-primary text-sm font-semibold tracking-wider'>{label}</h4>
        <h2 className='text-2xl text-white tracking-wider'>{title}</h2>
    </div>
  )
}

export default SectionTitle