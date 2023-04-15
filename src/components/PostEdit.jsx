import React, { useState } from "react";
import AvatarPost from "./AvatarPost";
import { useNavigate } from "react-router-dom";

export default function PostEdit({item, fnEdit}) {
  const [text, setText] = useState(item.content);
  const navigate = useNavigate();

  function goOnHomePage() {
    const aaa = `/`;
    navigate(aaa);
  }

  function savePost() {
    console.log('999', item.id);
    let postObj = {
      'id': 1,
      'content': text
    };
    const URL = 'http://localhost:7070/posts';
    
    const fnFetch = async () => {
      try {
        const response = await fetch(URL, {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify(postObj)
                                })
        const status = response.ok;
        if (status) {
          fnEdit();
        } else {
          console.log(' Ответ на 2хх!!! ');
        }
      } catch(error) {
        console.error('!!! ERROR FETCH', error);
      }
      
    }
    fnFetch();
  }

  return (
      <article className='bb card'>
        <div className='newheader'>
          <div><h3>Редактировать публикацию</h3></div>
          <div className='krestik' onClick={goOnHomePage}>
            <img src={require('../img/krestik22.png')} alt="foo" />
          </div>
        </div>
        
        <div className='wrapnewpost'>
          <AvatarPost />
          <textarea className='' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='prebottom'>
          <div>
            <div className='btnoval'>Фото/видео</div>
            <div className='btnoval'>Чувства/действия</div>
            <div className='btnoval'>GIF</div>
          </div>
          <div>
            <div className='btnoval'>Отметить друзей</div>
            <div className='btnoval'>Отметить посещение</div>
          </div>
        </div>
        <button onClick={savePost}>Сохранить</button>
      </article>
 )
}
