import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from "react-icons/fa";
function Footer() {
    return (
        <div className="footer__wrapper">
            <div className="footer__content">
                <div className="footer__content--top">
                    <h1>JUST DO IT</h1>

                    <a className='link' href='https://news.nike.com/' target="_blank" rel="noreferrer" >
                        <button>Nike NEWS</button>
                    </a>

                </div>
                <div className='footer__content--social'>
                    <a className='link' href="mailto:nikola.dj.87@gmail.com">nikeoffice@nike.com</a>

                    <a className='link' href='https://www.facebook.com/' target="_blank" rel="noreferrer" >
                        <FaFacebookF />
                    </a>
                    <a className='link' href='https://twitter.com/home?lang=en/' target="_blank" rel="noreferrer" >
                        <FaTwitter />
                    </a>
                    <a className='link' href='https://www.instagram.com/' target="_blank" rel="noreferrer" >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
