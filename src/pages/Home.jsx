import React, { useContext } from "react";
import "../App.css";
import { RiImageAiFill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { dataContext } from "../context/UserContext";
import Chat from "./Chat";

  
const Home = () => {

  let{startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature} = useContext(dataContext);

  const handleSubmit = async (e)=>{
    setStartRes(true);
  }

  return (
    <div className="home">
      <nav>
        <div className="logo">Smart Ai Bot</div>
      </nav>

      {!startRes ? <div className="hero">
        <span id="tag">How can i help with ?</span>
        <div className="cate">
          <div className="upImg">
            <RiImageAiFill />  
            <span>Upload image</span>
          </div>
          <div className="genImg" onClick={()=>setFeature("genImg")}>
            <BsImage />
            <span>Generate image</span>
          </div>
          <div className="chat" onClick={()=>setFeature("chat")}>
            <BsChatLeft />
            <span>Let's chat </span>
          </div>
        </div>
      </div>: <Chat/>
      }
      <form action="" className="input-box" onSubmit={(e)=>{
        e.preventDefault();
        if(input){
          handleSubmit(e)
        }
      }}>
        {
          popUp ? <div className="pop-up">
          <div className="select-up">
            <RiImageAiFill />  
            <span>Upload image</span>
          </div>
          <div className="select-gen" onClick={()=>setFeature("genImg")}>
            <BsImage />
            <span>Generate image</span>
          </div>
        </div> : null
        }
        <div id="add" onClick={()=>{setPopUp(prev=>!prev)}}>{feature == "genImg" ? <BsImage /> : <FaPlus />}</div>
        <input type="" placeholder="Ask some questions..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        {
          input ? <button id="submit"><FaArrowUp /></button> : null
        }
      </form>
    </div>
  );
};

export default Home;
