import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import DriftPage from './components/DriftPage';
  

  const setActive = ({isActive}) => isActive ? 'menu__item-active' : 'menu__item';

  export default function App() {

    return (
      <>
        {/* <nav className='menu'>
            <NavLink to='/' className={setActive}>ГЛАВНАЯ</NavLink> 
            <NavLink to='/drift' className={setActive}>ДРИФТ-ТАКСИ</NavLink> 
            <NavLink to='/timeAttack' className={setActive}>TIME ATTACK</NavLink> 
            <NavLink to='/forza' className={setActive}>FORZA KARTING</NavLink> 
        </nav> */}
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/timeAttack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/drift" element={<DriftPage />} /> */}
        </Routes>
        </>
        
    );
  }
