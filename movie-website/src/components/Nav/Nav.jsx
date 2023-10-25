import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/img.svg"
import "./nav.css"


const Nav = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="" />
                
            </div>
            <ul>
            <Link to="/"> <li>Home</li> </Link>
            <Link to="/Pages"> <li>Pages</li> </Link>
            <Link to="/Movies"> <li>Movies</li> </Link>
            <Link to="/TvShows"> <li>Tv Shows</li> </Link>
            <Link to="/Celebs"> <li>Celebs</li> </Link>
            <Link to="/Blog"> <li>Blog</li> </Link>
           </ul>
            
        </nav>
    );
}

export default Nav;
