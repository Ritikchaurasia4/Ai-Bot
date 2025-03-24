import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext';

const Chat = () => {

  let{input, setInput, prevInput, setPrevInput} = useContext(dataContext);
  
  return (
    <div className='chat-page'>
        <div className="user">
            <img src="" />
            <span>{prevUser.prompt}</span>
        </div>
        <div className="ai">
            <img src="" />
            <span>Ai</span>
        </div>
    </div>
  )
}

export default Chat;