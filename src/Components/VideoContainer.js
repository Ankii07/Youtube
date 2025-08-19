import { use, useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../utils/SearchSlice';

const VideoContainer = () => {
   
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  const Videos = useSelector((store) => store.search.videos);
  console.log("videos",Videos)

  // const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchVideos()); // Dispatch the async thunk
    }, [dispatch]);

  return (
    <div className='p-4 flex gap-2 flex-wrap max-h-[100vh] overflow-y-scroll no-scrollbar absolute left-[250px] top-[120px]'>
      {Videos.length > 0 ? (
      // <VideoCard info={Videos[0]} />
      Videos.map((item,index) => <Link to={`/watch?v=${item.id}&categoryId=${item.snippet.categoryId}`} key={index}><VideoCard info={Videos[index] } /></Link>)
    ) : null}
    </div>
  )
}

export default VideoContainer
