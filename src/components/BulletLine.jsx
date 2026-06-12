import React from 'react'

function BulletLine({
    line,
    isPrimary=true,
    lineStyle
}) {
  return (
    <div className='flex items-center gap-2'>
        <div className={`w-[8px] h-[8px] ${isPrimary?'bg-primary':'bg-white'}`}
        ></div>
        <div className={`text-white font-semibold ${lineStyle}`}>{line}</div>
    </div>
  )
}

export default BulletLine