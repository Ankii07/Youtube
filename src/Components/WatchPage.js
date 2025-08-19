import React, { use, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import SimilarVideos from "./SimilarVideos";

const WatchPage = () => {
  const dispatch = useDispatch();

  const container = useRef();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  });
 useEffect(() => {
    // Scroll to top when videoId changes
    window.scrollTo({ top: 0, behavior: "smooth" });
    container.current.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll

    // Optional: Hard reset (instant) → window.scrollTo(0, 0);
  }, [searchParams]);
  return (
    <div ref={container} className="flex flex-col col-span-12 overflow-y-scroll no-scrollbar max-h-[800px] Z-10 absolute left-[200px]">
    <div className="flex ">
      <div>
        <iframe
        className="rounded-lg shadow-lg mt-2"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div>
        <LiveChat/>
      </div>   
    </div>
    <div className="-mt-[100px]">
    <CommentContainer/>
    <SimilarVideos categoryId={searchParams.get("categoryId")}/>
    </div>

     </div>
  );
};

export default WatchPage;
