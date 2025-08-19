import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 p-2 m-5 bg-gray-200 rounded-lg font-serif'>{name}</button>
    </div>
  )
}

export default Button
