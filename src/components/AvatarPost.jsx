import React from "react";

export default function AvatarPost({item, path}) {
  const avatarfoto = 'https://proprikol.ru/wp-content/uploads/2021/12/kartinki-ezhika-na-avu-41.jpg';
  const avatarStyle = {
    backgroundImage: `url(${avatarfoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return <>
    <div className='avatar' style={avatarStyle}></div>
  </>
}