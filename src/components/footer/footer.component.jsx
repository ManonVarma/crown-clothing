import React from 'react'; 

import './footer.style.css';

const Footer = () => {
    return (
        <div className='footer-basic fill-window'>
            <footer>
                <div className='social'>
                    <a href='/'>
                        <i className='icon ion-social-twitter'></i>
                    </a>
                    <a href='/'>
                        <i className='icon ion-social-linkedin'></i>
                    </a>
                    <a href='/'>
                        <i className='icon ion-social-facebook'></i>
                    </a>
                    <a href='/'>
                        <i className='icon ion-social-instagram'></i>
                    </a>
                </div>
                <ul className='list-inline'>
                    <li className='list-inline-item'><a href="/">Home</a></li>
                    <li className='list-inline-item'><a href="/shop">Shop</a></li>
                    <li className='list-inline-item'><a href="/contact">Contact</a></li>
                    <li className='list-inline-item'><a href="/">Privacy Policy</a></li>
                </ul>
                <p className='copyright' style={{fontSize: '20px'}}>Crown Clothing © 2021</p>
            </footer>
        </div>
    );
}

export default Footer;
