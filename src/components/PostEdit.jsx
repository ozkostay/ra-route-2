import React, { useState } from "react";
import AvatarPost from "./AvatarPost";
import { useNavigate } from "react-router-dom";

export default function PostEdit({item}) {
  // console.log('=============== path', props);
  const [text, setText] = useState(item.content);
  const navigate = useNavigate();

  function goOnHomePage() {
    navigate(`/posts/${item.id}`);
  }

  function savePost() {
    console.log('999', item.id);
    let postObj = {
      'id': 1,
      'content': text
    };
    const URL = 'http://localhost:7070/posts';
  
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then((response) => {
      console.log('response from FETCH ', response);
    })
    .catch((error) => {
      console.log('!!! ERROR FETCH', error);
    })
    .finally()
    goOnHomePage()
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
          <textarea className='bb' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='bb prebottom'>
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
