import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from '../utils/constants';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const SimilarVideos = ({categoryId}) => {
  
 const API_KEY = GOOGLE_API_KEY; // Replace with your actual API key

 const [suggested_Videos, setSuggested_Videos] = useState([]);


async function getRelatedVideos(categoryId) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.items)
    // return data.items;
    setSuggested_Videos(data.items);
  } catch (error) {
    console.error('Error fetching related videos:', error);
    return [];
  }
}

  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();
    console.log(json[1]);
    setQuerySuggestion(json[1]);
    
    // update the search cache
    dispatch(cacheResults({
      [SearchQuery] : json[1]
    }))
  }

  useEffect(() => {
     getRelatedVideos(categoryId);
   },[])


  return (
     <div className='p-4 flex gap-2 flex-wrap max-h-[100vh] w-[450px] overflow-y-scroll no-scrollbar absolute left-[870px] top-[710px]'>
      {suggested_Videos.length > 0 ? (
      // <VideoCard info={videos[0]} />
      suggested_Videos.map((item,index) => <Link to={`/watch?v=${item.id}&categoryId=${item.snippet.categoryId}`} key={item.id}><VideoCard info={suggested_Videos[index] } /></Link>)
    ) : null}
    </div>
  )
}

export default SimilarVideos