import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext';

const Chat = () => {

  let{input, setInput, prevInput, setPrevInput, showResult, setShowResult, feature, setfeature, preFeature, setPreFeature} = useContext(dataContext);
  
  return (
    <div className='chat-page'>
        <div className="user">
          {preFeature == "upimg" ? <><img src={prevUser.imgUrl} alt=''/>
           <span>{prevUser.prompt}</span></> : <span>{prevUser.prompt}</span> }
            {/* {prevUser.imgUrl && <img src={prevUser.imgUrl} alt="Uploaded" />}
            <span>{prevUser.prompt}</span> */}
        </div>
        <div className="ai">
          {preFeature == "genimg" ? <><img src={prevUser.imgUrl} alt=''/>
          {showResult ? <span>Loading...</span>:<span>{showResult}</span>}</> : !showResult ? <span>Loading...</span>:<span>{showResult}</span>}
            
        </div>
    </div>
  )
}

export default Chat;