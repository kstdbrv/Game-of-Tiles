import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../../store/actions/quiz'


const Header = () => (
    <header className="header">
      <div className="header__inner wrapper">
        <p>Board of Tiles: The Game</p>
        <a href="#" className="header__link">View Project Source</a>
      </div>  
    </header>
)


export default Header
