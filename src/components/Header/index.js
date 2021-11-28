import React from 'react';
import './Header.sass';
import logo from '../../assets/logo1.png'
import { FcAbout } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { BiPhotoAlbum } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const Header = () => {
    return(
     <>
        <input id="close-menu" class="close-menu" type="checkbox" aria-label="Close menu" role="button"/>
        <label class="close-menu-label" for="close-menu" title="close-menu"></label>
        <aside class="menu white-bg">
            <section class="main-content menu-content">

                <div><img className="logo" src={logo} alt="logo" /></div>
                
                <nav>
                
                    <ul onclick="getElementById('close-menu').checked = false;">
                        <li> 
                            <AiFillHome />
                            <Link to = "/">Inicio</Link>
                        </li>
                        <li>
                            <BiPhotoAlbum />
                            <Link to = "/album">Album</Link>
                        </li>
                        <li>
                            <FcAbout />
                            <a href="https://github.com/henriquepython/">Sobre</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </aside>
    </>
    );
}



export default Header;
