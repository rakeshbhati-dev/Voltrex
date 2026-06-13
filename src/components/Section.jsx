import React from 'react'

function Section({children,isDark=false,id=''}) {
  return (
    <div
    className={`p-10 ${isDark?'bg-dark':'bg-background'}`}
    id={id}
    >
        {children}
    </div>
  )
}

export default Section