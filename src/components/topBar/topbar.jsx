/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdQueryStats } from 'react-icons/md';
import './topbar.css';

function Topbar() {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#profil' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#stats" onClick={() => setActiveNav('#stats')} className={activeNav === '#stats' ? 'active' : ''}><MdQueryStats /></a>
    </nav>
  );
}

export default Topbar;
