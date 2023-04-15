import React from "react";

import fpics from '../img/4pic.png';
import AvatarPost from "./AvatarPost";
import { useNavigate } from "react-router-dom";
import NameDate from "./NameDate";
import PostContent from "./PostContent";
import LikeIt from "./LikeIt";
import BottomPost from "./BottomPost";

export default function Post({mode, item}) {
  // console.log('=============== path', props);
  const navigate = useNavigate();

  function goToPostView(id) {
    navigate(`/posts/${id}`);
  }

  // function CardBottom() {
    

  //   let bottom = <div className='comments'>
  //                 <AvatarPost / >
  //                 <div className='bb comment'>
  //                   <input type="text" className='inputcomment'/>
  //                   <img src={fpics}  alt=''/>
  //                 </div>
  //               </div>
    
  //   // console.log('mode=', mode);                
    
  //   if (mode === 'edit') {
  //     bottom = <div>
  //       <button>Изменить</button>
  //       <button style={{backgroundColor: '#b04546'}}>Удалить</button>
  //     </div>
  //   }
  //   // console.log('bottom', bottom);
  //   return bottom;
  // }

  return<>
      <article className='card' onClick={() => goToPostView(item.id)}>
        <div className='wrapavatar'>
          <AvatarPost />
          <NameDate />
        </div>
        <PostContent item={item} />
        <LikeIt />
        <BottomPost />
      </article>
  </>
}