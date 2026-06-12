import React from 'react'

function Stats({
    heading,
    subHeading
}) {
  return (
    <div className='text-center md:text-right '>
        <h3 className='text-primary text-xl md:text-5xl font-bold'>{heading}</h3>
        <p className='text-gray tracking-widest'>{subHeading}</p>
    </div>
  )
}

export default Stats