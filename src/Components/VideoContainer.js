import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
   
  const [videos, setVideos] = useState([]);

   useEffect(() => {
     getVideos();
   },[])
   
   const getVideos = async () => {
     const data = await fetch(YOUTUBE_VIDEOS_API)
     const json = await data.json();
    //  console.log(json.items);
     setVideos(json.items);
   }

  return (
    <div className='p-4 flex gap-2 flex-wrap max-h-[100vh] overflow-y-scroll no-scrollbar'>
      {videos.length > 0 ? (
      // <VideoCard info={videos[0]} />
      videos.map((item,index) => <Link to={`/watch?v=${item.id}`} key={index}><VideoCard info={videos[index] } /></Link>)
    ) : null}
    </div>
  )
}

export default VideoContainer
