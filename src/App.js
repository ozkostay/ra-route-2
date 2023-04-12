import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost'

  // const setActive = ({isActive}) => isActive ? 'menu__item-active' : 'menu__item';

  export default function App() {

    return (
      <div className='wrapper'>
        {/* <nav className='menu'>
            <NavLink to='/' className={setActive}>ГЛАВНАЯ</NavLink> 
            <NavLink to='/drift' className={setActive}>ДРИФТ-ТАКСИ</NavLink> 
            <NavLink to='/timeAttack' className={setActive}>TIME ATTACK</NavLink> 
            <NavLink to='/forza' className={setActive}>FORZA KARTING</NavLink> 
        </nav> */}
        <header>
          {/* <div className='top'>
            <Link to='/posts/new'>
              <button>Создать пост</button>
            </Link> 
          </div> */}
        </header>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts/new' element={<NewPost />} />
            {/* <Route path="/forza" element={<ForzaPage />} />
            <Route path="/drift" element={<DriftPage />} /> */}
        </Routes>
        
      </div>  
    );
  }
