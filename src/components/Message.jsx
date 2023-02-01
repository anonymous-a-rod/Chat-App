import React from 'react';
import {auth} from '../firebase'

const style = {
  message: `flex items-start shadow-xl m-4 py-2 px-3 rounded-tl-3xl rounded-tr-3xl`,
  name: `absolute mt-[-1.75rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-3xl`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-3xl`,
};

const Message = ({ message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
