import React from 'react'

function Button({
    title,
    onClick,
    buttonStyle
}) {
  return (
    <button
    onClick={onClick}
    className={` font-bold text-white bg-primary py-2 px-6 tracking-widest text-sm uppercase ${buttonStyle}`}
    >{title}</button>
  )
}

export default Button