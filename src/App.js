import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost'
import PostView from './components/PostView'

  // const setActive = ({isActive}) => isActive ? 'menu__item-active' : 'menu__item';

  export default function App() {

    return (
      <div className='wrapper'>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts/new' element={<NewPost />} />
            <Route path='/posts/:postId' element={<PostView />} />
            {/* <Route path="/forza" element={<ForzaPage />} />
            <Route path="/drift" element={<DriftPage />} /> */}
        </Routes>
        
      </div>  
    );
  }
 