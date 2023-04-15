import React from 'react';
import Posts from './Posts';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate();

  

  return (
    <main>
      <div className='top'>
        <Link to='/posts/new' mode='new'>
          <button>Создать пост</button>
        </Link> 
      </div>
      <Posts />
    </main>
  )
}
