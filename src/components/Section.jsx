import React from 'react'

function Section({children}) {
  return (
    <div
    className='p-10 bg-background'
    >
        {children}
    </div>
  )
}

export default Section