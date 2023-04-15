import React from "react";
import imgLike from '../img/like.png';
import imgMessage from '../img/message.png';
import fpics from '../img/4pic.png';
import AvatarPost from "./AvatarPost";
import { useNavigate } from "react-router-dom";

export default function Post({mode, item}) {
  // console.log('=============== path', props);
  const navigate = useNavigate();

  function goToPostView(id) {
    navigate(`/posts/${id}`);
  }

  function CardBottom() {
    const avatarfoto = 'https://proprikol.ru/wp-content/uploads/2021/12/kartinki-ezhika-na-avu-41.jpg';
    const avatarStyle = {
    backgroundImage: `url(${avatarfoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    };

    let bottom = <div className='comments'>
                  <div className='avatar' style={avatarStyle}></div>
                  <div className='bb comment'>
                    <input type="text" className='inputcomment'/>
                    <img src={fpics}  alt=''/>
                  </div>
                </div>
    
    console.log('mode=', mode);                
    
    if (mode === 'edit') {
      bottom = <div>
        <button>Изменить</button>
        <button style={{backgroundColor: '#b04546'}}>Удалить</button>
      </div>
    }
    console.log('bottom', bottom);
    return bottom;
  }

  return<>
      <article className='card' onClick={() => goToPostView(item.id)}>
        <div className='wrapavatar'>
          <AvatarPost path='POSTS' />
        </div>
        <div className='post'>
          {item.content}
        </div>
        <div className='likes'>
          <div className='like'><img src={imgLike} alt=''/><span> Нравится</span></div>
          <div className='like'><img src={imgMessage} alt=''/><span> Комментировать</span></div>
        </div>
        <CardBottom />
      </article>
  </>
}