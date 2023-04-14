import React from "react";
import imgLike from '../img/like.png';
import imgMessage from '../img/message.png';
import fpics from '../img/4pic.png';
import AvatarPost from "./AvatarPost";

export default function Post({item, path}) {
  // console.log('=============== path', props);
  
  return<>
    <article className='card'>
        <div className='wrapavatar'>
          <AvatarPost path='POSTS' />
        </div>
        
        <div className='post'>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam veritatis quia voluptas, explicabo harum earum quo. Quaerat recusandae atque porro, expedita blanditiis veniam nostrum itaque labore! Laboriosam, aspernatur accusantium. */}
          {item.content}
        </div>
        <div className='likes'>
          <div className='like'><img src={imgLike} alt=''/><span> Нравится</span></div>
          <div className='like'><img src={imgMessage} alt=''/><span> Комментировать</span></div>
        </div>
        <div className='comments'>
          <div className='bb comment'>
            <input type="text" className='inputcomment'/>
            <img src={fpics}  alt=''/>
          </div>
        </div>

      </article>
  </>
}