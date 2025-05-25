  import React, { createContext, useState } from 'react'

  export const dataContext = createContext();

  export let user = {
      data:null,
      mime_type:null,
      imgUrl:null,
  }

  export let prevUser = {
      data:null,
      mime_type:null,
      prompt:null,
      imgUrl:null,
  }


  const UserContext = ({children}) => {

    let [startRes, setStartRes] = useState(false);

    let[popUp, setPopUp] = useState(false);

    let[input, setInput] = useState("");

    let[feature, setFeature] = useState("chat");

    // let[prevInput, setPrevInput] = useState("");
    let[showResult, setShowResult] = useState("");

    let[preFeature, setPreFeature] = useState("chat");

    let value = {
      startRes, setStartRes,
      popUp,setPopUp, 
      input, setInput, 
      feature, setFeature,
      showResult, setShowResult,
      preFeature, setPreFeature
    }

    return (
      <div>
        <dataContext.Provider value={value}>
        {children}
        </dataContext.Provider>
      </div>
    )
  }

  export default UserContext;