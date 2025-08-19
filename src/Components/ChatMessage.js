import React from 'react'
import user_image from '../assets/profile-user.png'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex gap-1'> 
        <img className='min-w-7 min-h-7 max-h-7 rounded-full' src={user_image} alt="user_image" />
        <span className='font-bold'>{name}</span> <span className='font-bold'>:</span> <span>{message}</span>

    </div>
  )
}

export default ChatMessage