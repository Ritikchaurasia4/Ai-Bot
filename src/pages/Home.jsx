import React, { useContext } from "react";
import "../App.css";
import { RiImageAiFill } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { dataContext, prevUser, user } from "../context/UserContext";
import Chat from "./Chat";
import { generateResponse } from "../gemini";

  
const Home = () => {

  let{startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, prevInput, setPrevInput} = useContext(dataContext);

  const handleSubmit = async (e)=>{
    setStartRes(true);
    // setPrevInput(input);
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    setInput(""); 
    let result = await generateResponse(input);
    console.log(result);
  }

  const handleImage = (e) =>{
    setFeature("upimg");
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload=(event)=>{
      // console.log(reader.result);
      // console.log(event);
      let base64 = event.target.result.split(',')[1];
      user.data = base64;
      user.mime_type = file.type;
      console.log(event)
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
    }
    reader.readAsDataURL(file);

    // console.log(file);
  }

  return (
    <div className="home">
      <nav>
        <div className="logo">Smart Ai Bot</div>
      </nav>

      <input type="file" accept="image/*" hidden id="inputImg" onChange={handleImage}/>

      {!startRes ? <div className="hero">
        <span id="tag">How can i help with ?</span>
        <div className="cate">
          <div className="upImg" onClick={()=>{
            document.getElementById('inputImg').click()
          }}>
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
          <div className="select-up" onClick={()=>{
            document.getElementById('inputImg').click()
          }}>
            <RiImageAiFill />  
            <span>Upload image</span>
          </div>
          <div className="select-gen" onClick={()=>setFeature("genImg")}>
            <BsImage />
            <span>Generate image</span>
          </div>
        </div> : null
        }
        <div id="add" onClick={()=>{setPopUp(prev=>!prev)}}>{feature == "genImg" ? <BsImage id="genImg"/> : <FaPlus />}</div>
        <input type="" placeholder="Ask something..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        {
          input ? <button id="submit"><FaArrowUp /></button> : null
        }
      </form>
    </div>
  );
};

export default Home;
