import { use, useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, setVideos } from '../utils/SearchSlice';

const VideoContainer = () => {
   
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  const Videos = useSelector((store) => store.search.videos);
  console.log("videos",Videos)

  const searchClicked = useSelector((store) => store.search.searchClicked);
  console.log(searchClicked)

  // const dispatch = useDispatch();
    
    useEffect(() => {
        getVideos() // Dispatch the async thunk
    }, []);

     const getVideos  = async() => {
       const response = await fetch(YOUTUBE_VIDEOS_API);
        const data = await response.json();
        dispatch(setVideos(data.items));
      }

  return (
   <div className='p-4 flex gap-2 flex-wrap max-h-[100vh] overflow-y-scroll no-scrollbar absolute left-[250px] top-[120px]'>
  {Videos.length > 0 ? (
    Videos.map((item, index) => {
      // Debug log only when searchClicked is true
      // if (searchClicked) {
      //   console.log(item.id?.videoId);
      // }
      
      return (
        <Link 
          to={`/watch?v=${searchClicked ? item.id?.videoId : item.id}&categoryId=${item.snippet?.categoryId}`} 
          key={index}
        >
          <VideoCard info={Videos[index]} />
        </Link>
      );
    })
  ) : null}
</div>
  )
}

export default VideoContainer
