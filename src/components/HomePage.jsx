import React from 'react';
import imgLike from '../img/like.png';
import imgMessage from '../img/message.png';
import fpics from '../img/4pic.png';



export default function HomePage() {
  return (
    <main className='wrapper'>
      <div className='top'>
        <button>Создать пост</button>
      </div>
      
      <article className='card'>
        <div className='wrapavatar'>
          <div className='avatar'>Фото</div>
          <div>
            <div className='fio'>Иван Сидоров</div>
            <div className='wraptime'>
              <div className='whois'>Основатель группы</div>
              <div className='time'>4 мин.</div>
            </div>
          </div>
        </div>
        
        <div className='post'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam veritatis quia voluptas, explicabo harum earum quo. Quaerat recusandae atque porro, expedita blanditiis veniam nostrum itaque labore! Laboriosam, aspernatur accusantium.
        </div>
        <div className='likes'>
          <div className='like'><img src={imgLike}/><span> Нравится</span></div>
          <div className='like'><img src={imgMessage}/><span> Комментировать</span></div>
        </div>
        <div className='comments'>
          <div className='avatar'>Фото</div>
          <div className='bb comment'>
            <input type="text" className='inputcomment'/>
            <img src={fpics}/>
          </div>
        </div>

      </article>
      
    </main>
  )
}
