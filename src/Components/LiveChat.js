import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName } from '../utils/Helper';
import { generateRandomComment } from './Random_Comment';


const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [LiveMessage, SetLiveMessage] = useState("");
  
  const input_value = useRef();

  // console.log(input_value)

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(addMessage({ name: generateRandomName(), message: generateRandomComment() }))
    }, 1500);
    // Always clear the interval
    return () => clearInterval(i);
  }, []);

  const handleInput = () => {
      SetLiveMessage(input_value.current.value);   
  }
  const handleSubmit = () => {
      dispatch(addMessage({name: generateRandomName(), message: LiveMessage}));
      input_value.current.value = " ";
  }

  return (
    <>
    <div className='bg-slate-100 w-[370px] h-[600px] m-2 p-2 rounded-lg shadow-lg flex flex-col-reverse gap-4 overflow-y-scroll no-scrollbar ml-5'>
      {chatMessages.map((message, index) => <ChatMessage key={index} name={message.name} message={message.message} />)}
    </div>
    <div className='flex ml-5'>
      <input ref={input_value} className='bg-slate-100 w-[260px] h-[50px] m-2 p-2 rounded-lg shadow-lg cursor-pointer z-10' placeholder='Message' onChange={handleInput}/>
  
      <button className='bg-slate-100 w-[90px] h-[50px] m-2 p-2 rounded-lg shadow-lg z-10' onClick={handleSubmit}>Send</button>
    </div>
    </>
  )
}

export default LiveChat