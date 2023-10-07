import React from "react";
import Landing from "../../components/landing/Landing";
import { Latest } from "../../components/latest/Latest";
import "./Home.scss";

const Home = () => {
  const handleClick = () => {
    console.log(document.querySelector(".box").style.height);
    document.querySelector(".box").style.height = "10em";
  };
  return (
    <>
      <Landing />
      <Latest />
    </>
  );
};

export default Home;
