import React from 'react'
import './header.css'


const Header = () => (
    <header className="header">
      <div className="header__inner wrapper">
        <p>Board of Tiles: The Game</p>
        <a href="https://github.com/kstdbrv/Game-of-Tiles"
          target="_blank"
          className="header__link">View Project Source
        </a>
      </div>  
    </header>
)

export default Header
