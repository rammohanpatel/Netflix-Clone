import React from 'react'
import { Link } from 'react-router-dom';
import Logonetflix from './Logonetflix.png';
import {ImSearch} from 'react-icons/im'

// 

const Header = () => {
  return (
    <nav nav className="header">
    
    <img src={Logonetflix}></img>
    <div>
      <Link to="/tvshows">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/recent">Recently Added</Link>
      <Link to="/mylist">My List</Link>
    </div>
    <ImSearch/>

    </nav>
  )
}

export default Header;


