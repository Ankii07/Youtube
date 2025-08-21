import React, { startTransition } from 'react'

const VideoCard = ({info }) => {
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
     const viewCount = statistics?.viewCount || "10000"; // Default 10k views
    const likeCount = statistics?.likeCount || "5000";  // Default 5k likes
    
    const viewModifier = (number) => {
       if(number <= 1000) return number ;
       else if(number > 1000 && number < 100000 ) return `${(number / 1000).toFixed(1)}k`
       else if(number > 100000 && number < 10000000 ) return `${(number / 100000).toFixed(1)}M`
       else if( number >= 10000000 ) return `${(number / 10000000).toFixed(1)}B`
    }

  return (
    <div className=' max-w-[400px] max-h-[400px] border-2 border-black-400 rounded-lg shadow-slate-500 '>
      <img className='  max-w-[400px] rounded-lg' src={thumbnails.high.url}/>
      <div className='flex flex-col px-2 max-w-[400px]  text-black-500'>
      <h3 className='flex  font-bold font-sans text-sm '>{title}</h3>
      <p className='flex justify-items-start  font-sans text-md bg-slate-200 max-w-fit rounded-md '>{channelTitle}</p>
      <div className='flex gap-4'>
      <p className=' font-sans text-sm  '>{viewModifier(viewCount) + " views"}</p>
      <p className=' font-sans text-sm '>{viewModifier(likeCount) + " likes"}</p>
      </div >
      </div>
    </div>
  )
}

export default VideoCard
