import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col">
    <div className=" ">
      <iframe
        className="rounded-lg shadow-lg -ml-[50px] mt-2"
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
    <div className="min-w-full">
    <CommentContainer/>
    </div>
     </div>
  );
};

export default WatchPage;
