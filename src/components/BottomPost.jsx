import React from "react";
import fpics from '../img/4pic.png';
import AvatarPost from "./AvatarPost";

export default function BottomPost() {

  return (
    <div className='comments'>
      <AvatarPost />
      <div className='bb comment'>
        <input type="text" className='inputcomment'/>
        <img src={fpics}  alt=''/>
      </div>
    </div>
  ) 
}
