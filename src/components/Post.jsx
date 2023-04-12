import React from "react";
import imgLike from '../img/like.png';
import imgMessage from '../img/message.png';
import fpics from '../img/4pic.png';

export default function Post({item}) {
  const avatarfoto = 'https://proprikol.ru/wp-content/uploads/2021/12/kartinki-ezhika-na-avu-41.jpg';
  const avatarStyle = {
    backgroundImage: `url(${avatarfoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  
  return<>
    <article className='card'>
        <div className='wrapavatar'>
          <div className='avatar' style={avatarStyle}></div>
          <div>
            <div className='fio'>Иван Сидоров</div>
            <div className='wraptime'>
              <div className='whois'>Основатель группы</div>
              <div className='time'>4 мин.</div>
            </div>
          </div>
        </div>
        
        <div className='post'>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam veritatis quia voluptas, explicabo harum earum quo. Quaerat recusandae atque porro, expedita blanditiis veniam nostrum itaque labore! Laboriosam, aspernatur accusantium. */}
          {item.content}
        </div>
        <div className='likes'>
          <div className='like'><img src={imgLike}/><span> Нравится</span></div>
          <div className='like'><img src={imgMessage}/><span> Комментировать</span></div>
        </div>
        <div className='comments'>
          <div className='avatar' style={avatarStyle}></div>
          <div className='bb comment'>
            <input type="text" className='inputcomment'/>
            <img src={fpics}/>
          </div>
        </div>

      </article>
  </>
}