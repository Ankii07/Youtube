import React, { useContext, useEffect, useRef } from "react";
import UserContext from "../Context/usercontext";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setHomePage } from "../utils/appSlice";

const Sidebar = () => {
  // const {toggleMenu} = useContext(UserContext);
  // if(toggleMenu) return null;

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const sidebarRef = useRef(null);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
   
  const isHomePage = useSelector((store) => store.app.isHomePage);

  useEffect(() => {
      navigate('/');
      dispatch(setHomePage());
    
  }, [isHomePage, navigate]);


  useEffect(() => {
    // Set initial position (off-screen when closed)
    gsap.set(sidebarRef.current, { x: isMenuOpen ? 0 : -400 });

    // Animation for menu state changes
    const animation = gsap.from(sidebarRef.current, {
      x: -400,
      duration: 1.5,
      ease: "bounce.out",
    });

    return () => {
      animation.kill(); // Clean up animation on unmount
    };
  }, [isMenuOpen]); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={sidebarRef}
      className="p-5 shadow-lg col-span-2 justify-items-start z-10 bg-slate-100 "
    >
      <h1 className="font-bold text-xl font-serif">Subscriptions</h1>
      <ul className="text-lg font-serif">
        <li><Link to={'/'}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Shops</li>
      </ul>
      <h1 className="font-bold pt-5 text-xl font-serif">History</h1>
      <ul className="text-lg font-serif">
        <li>Music</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5 text-xl font-serif">Watch Later</h1>
      <ul className="text-lg font-serif">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 text-xl font-serif">Explore</h1>
          <ul className='text-lg font-serif'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5 text-xl font-serif">Setting</h1>
          <ul className='text-lg font-serif'>
        <li>Music</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
