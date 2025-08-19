import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = ["All", "Trending", "Music", "Sports", "Gaming", "News", "Cricket", "Live", "Movies", "Lifestyle"];
  return (
    <div className="flex justify-evenly  h-20 absolute  left-[250px] ">
      {List.map((item, index) => <Button key={index} name={item} />)}
      {/* <Button name="All" />
      <Button name="Trending" />
      <Button name="Music" />
      <Button name="Sports" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Live" />
      <Button name="Movies" />
      <Button name="Lifestyle" /> */}
    </div>
  );
};

export default ButtonList;
