import React from 'react';
import './Header.sass';
import logo from '../../assets/logo1.png'
import { FcAbout } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { BiPhotoAlbum } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const Header = () => {
    return(
     
        <header>
            <div className="menu">
                <div>
                    <img className="logo" src={logo} alt="logo" />
                </div>           
                <ul>
                
                        <li>
                            <AiFillHome />
                            <button><Link to = "/">Inicio</Link></button>
                        </li>

                        <li>
                            <BiPhotoAlbum />
                            <button><Link to = "/album">Album</Link></button>
                        </li>
                        
                        <li>
                            <FcAbout />
                            <button><a href="https://github.com/henriquepython/">Sobre</a></button>
                        </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
