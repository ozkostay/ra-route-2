import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
  
  const [text, setText] = useState('');
  // const [resFetch] = useFetcher('http://localhost:7070/posts');
  const navigate = useNavigate();

  const avatarfoto = 'https://proprikol.ru/wp-content/uploads/2021/12/kartinki-ezhika-na-avu-41.jpg';
  const avatarStyle = {
    backgroundImage: `url(${avatarfoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  function addPost() {
    let postObj = {
      'content': text
    };
    const url = 'http://localhost:7070/posts';

    fetch(url, {
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
    navigate("/");
  }

  return <section>
    <div className='card'>
      <header className='newheader'>
        <div className='newheader'>
          <div className='newmenuitem'>
            <img src={require('../img/pensil.png')} alt="foo"/>
            <span>Публикация</span>
          </div>
          <div className='newmenuitem'>
            <img src={require('../img/foto.png')} alt="foo" />
            <span>Фото/видео</span>
          </div>
          <div className='newmenuitem'>
            <img src={require('../img/video.png')} alt="foo" />
            <span>Прямой эфир</span>
          </div>
          <div className='newmenuitem'>
            <img src={require('../img/3dot.png')} alt="foo" />
            <span>Ещё</span>
          </div>
        </div>
        
        <div className='krestik'>
          <img src={require('../img/krestik22.png')} alt="foo" />
        </div>
      </header>
      <div className='wrapnewpost'>
        <div className='avatar' style={avatarStyle}></div>
        <textarea className='bb' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={addPost}>Опубликовать</button>
    </div>
  </section>
}