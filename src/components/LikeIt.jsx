import React from "react";
import imgLike from '../img/like.png';
import imgMessage from '../img/message.png';

export default function LikeIt() {

  return (
    <div className='likes'>
      <div className='like'><img src={imgLike} alt=''/><span> Нравится</span></div>
      <div className='like'><img src={imgMessage} alt=''/><span> Комментировать</span></div>
    </div>
  ) 
}