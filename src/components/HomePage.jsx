import React from 'react';
import Posts from './Posts';
import { Link } from 'react-router-dom';

export default function HomePage() {

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
