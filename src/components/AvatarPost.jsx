import React from "react";

export default function AvatarPost({item, path}) {
  const avatarfoto = 'https://proprikol.ru/wp-content/uploads/2021/12/kartinki-ezhika-na-avu-41.jpg';
  const avatarStyle = {
    backgroundImage: `url(${avatarfoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  let avaPlus = '';
  console.log('LLLLLLLLLL', path);

  switch(path) {
    case "POSTS":
      console.log('POSTS');
      avaPlus = <div>
                  <div className='fio'>Иван Сидоров</div>
                  <div className='wraptime'>
                    <div className='whois'>Основатель группы</div>
                    <div className='time'>4 мин.</div>
                  </div>
                </div>
      break;
  default:
      avaPlus = ''
      break;
  }
  
  console.log('++++ path', path);

  return <>
    <div className='avatar' style={avatarStyle}></div>
    {avaPlus}
  </>
}