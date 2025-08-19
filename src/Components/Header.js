import React, { use, useContext, useEffect, useRef, useState } from "react";
import hamburger_menu from "../assets/burger-bar.png";
import youtube_logo from "../assets/youtube_logo.png";
import search_Icon from "../assets/search.png";
import cross_Icon from "../assets/cross.png";
import voice_Icon from "../assets/microphone.png";
import notification_Icon from "../assets/bell.png";
import plus_Icon from "../assets/plus.png";
import UserContext from "../Context/usercontext";
import { useDispatch, useSelector } from "react-redux";
import { gotoHomePage, toggleMenu } from "../utils/appSlice";
import gsap from "gsap";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import magnifying_glass from "../assets/magnifying-glass.png";
import { cacheResults } from "../utils/SearchSlice";
import { Link } from "react-router-dom";
import store from "../utils/store";

const Header = () => {
  
  const [SearchQuery, setSearchQuery] = useState("");
  //  console.log(SearchQuery)
  const [showSuggestions, setShowSuggestions] = useState(false);  
   
   const [querySuggestion, setQuerySuggestion] = useState([]);
  //  make an api call after every key press
  //  but it the difference btween 2 API calls is < 200ms
  // decline the API call
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const homePage = useSelector((store)=> store.app);

  const handleLogoClick = () => {
     dispatch(gotoHomePage()) 
    console.log(homePage);  
  }
  

  /*
   searchCache ={
     "iphone": ["iphone 13","iphone 13 pro","iphone 13 pro max"],
   }
   searchQuery = iphone
*/ 

  useEffect(() => {
    // make api call after 200ms
    const timer = setTimeout(() => {
      
      if(searchCache[SearchQuery]){
       setQuerySuggestion(searchCache[SearchQuery]);
      }
      else{
        getSearchSuggestions()
      }},200);
    
    return () => clearTimeout(timer);
  }, [SearchQuery]);

  /*
  
  key - i
  -render the component
  - useEffect()
  -start timer => make api call after 200ms
  -clear timer

    key - ip
  -destroy the component(useEffect return method)
  -render the component
  - useEffect()
  -start timer => make api call after 200ms
  -clear timer
  
  
  */ 

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

  const inputRef = useRef(null);
  //  const {toggleMenu, setToggleMenu} = useContext(UserContext);

  const handleClearClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  
  const handleSearchClick = () => {
    console.log("Search Clicked");
  }


  return (
    <div className="flex items-center px-2  bg bg-left-top min-w-[100vh] max-h-[8vh] justify-between shadow-lg">
      <div className="flex items-center">
        <img
          className="min-w-8 max-h-8 cursor-pointer"
          src={hamburger_menu}
          alt="menu"
          onClick={handleMenuClick}
        />
         <img className="w-[200px] max-h-[200px] " src={youtube_logo} alt="logo" onClick={handleLogoClick} />
      </div>
       
       <div className="flex absolute left-[450px] top-2 flex-col bg-white z-10 rounded-lg">
        <div className="relative  min-w-[40vw] ">
        <div className="relative flex items-center border-2 border-black max-w-[90%] min-h-11 rounded-3xl -ml-1 ">
          <input 
            
            ref={inputRef}
            className=" min-w-[60%] min-h-9 rounded-l-3xl rounded-r-xl md:min-w-[80%] bg-slate-300 p-2 "
            type="text"
            value = {SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="absolute right-[20%] min-w-9 min-h-9  bg-opacity-50 md:right-[20%]"
            onClick={handleClearClick}
          >
           <img
              className="min-w-8 max-h-8 rounded-lg"
              src={cross_Icon}
              alt="Search_Icon"
            />
          </button>
          <div onClick={handleSearchClick}>
            <img
              className="min-w-8 max-h-7 absolute right-2 top-2"
              src={search_Icon}
              alt="Search_Icon"
            />
          </div>
        </div>
        <div className="bg-black ">
          <img
            className="min-w-8 max-h-9 absolute right-2 top-1 rounded-full bg-slate-300"
            src={voice_Icon}
            alt="Search_Icon"
          />
        </div>
      </div>
         {showSuggestions && <div className=" m-2 ">
           <ul className="flex flex-col items-start pl-2.5 gap-2.5">
             {querySuggestion.map((item, index)=>{
               return <div key={index} className="flex items-center gap-2 p-2 shadow-sm min-w-full hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg" >
                  <img className="min-w-6 max-h-6" src={magnifying_glass} alt="magnifying_glass"/>
                  <li className="">{item}</li>
             </div>})}
           </ul>
         </div>}
       </div>
   

      <div className="flex items-center min-w-[15vw] justify-evenly">
        <div className="flex items-center gap-2 bg-slate-300 rounded-2xl  p-1">
          <img
            className="min-w-7 max-h-7 p-1"
            src={plus_Icon}
            alt="Plus_Icon"
          />
          <p className="text-white-500 font-serif text-xl p-1">Create</p>
        </div>
        <img
          className="min-w-8 max-h-8"
          src={notification_Icon}
          alt="Notification_Icon"
        />
        <div className="min-w-8 max-h-8">
          <h1 className="text-white font-serif text-2xl bold bg-orange-500 rounded-full">
            C
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
