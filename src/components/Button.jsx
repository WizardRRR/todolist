import React from 'react'

function Button({ onClick, className, title, icon }) {
  return (
    <>
      <button
        className={`flex w-fit gap-1 shadow-lg items-center p-2 font-bold rounded-md text-sm hover:scale-105 transition-all ${className}`}
        onClick={onClick}
      >
        {icon}
        {title}
      </button>
    </>
  )
}

export default Button