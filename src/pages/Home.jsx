import React from "react";
import "../App.css";
import { RiImageAiFill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";


const Home = () => {
  return (
    <div className="home">
      <nav>
        <div className="logo">Smart Ai Bot</div>
      </nav>
      <div className="hero">
        <span id="tag">How can i help with ?</span>
        <div className="cate">
          <div className="upImg">
            <RiImageAiFill />  
            <span>Upload image</span>
          </div>
          <div className="genImg">
            <BsImage />
            <span>Generate image</span>
          </div>
          <div className="chat">
            <BsChatLeft />
            <span>Let's chat </span>
          </div>
        </div>
      </div>
      
      <form action="" className="input-box">
        <button id="add"><FaPlus /></button>
        <input type="" placeholder="Ask some questions..." />
        <button id="submit"><FaArrowUp /></button>
      </form>
    </div>
  );
};

export default Home;
