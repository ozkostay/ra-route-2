import React from "react";
import { useNavigate } from 'react-router-dom';
import fpics from '../img/4pic.png';
import AvatarPost from "./AvatarPost";

export default function BottomView({fnEdit}) {

  return (
    <div>
      <button onClick={fnEdit}>Изменить</button>
      <button style={{backgroundColor: '#b04546'}}>Удалить</button>
    </div>
  ) 
}
