import React from 'react';
import './Footer.sass';
import { AiFillInstagram, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return(
        <footer>
            <div className = 'textfooter'>  
                <p>info@meusite.com</p>
                <p>Tel: XXX-XXXX-XXXX</p>
            </div>
            <div className = "iconfooter">
                <AiFillInstagram />
                <AiFillGithub />
                <AiOutlineWhatsApp />
            </div>
            <p>Feito por João Henrique. 2021</p>
        </footer>
    );
}

export default Footer;