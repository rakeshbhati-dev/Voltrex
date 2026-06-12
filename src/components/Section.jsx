import React from 'react'

function Section({children,isDark=false}) {
  return (
    <div
    className={`p-10 ${isDark?'bg-dark':'bg-background'}`}
    >
        {children}
    </div>
  )
}

export default Section