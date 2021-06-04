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
                    <button>Contact us</button>
                </div>
                <div className='footer__content--social'>
                    <p>randomemail@yahoo.com</p>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
}

export default Footer;
