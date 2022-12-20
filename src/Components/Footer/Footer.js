import './Footer.css';
import React from 'react';
import { footerItems } from '../Details.js';
import { useStateValue } from '../Context/StateProvider';

function Footer() {

    const [{ mode }] = useStateValue();
    const dark = {
        color: 'white',
        backgroundColor: 'rgb(0, 13, 110)'
    };
    const border = {
        border: '1px solid rgb(0, 13, 110)',
    };
    const name = {
        filter: 'invert(100%)',
    };
    const light = {};

    return (
        <div className='footer_main' style={mode === true ? dark : light}>
            <div className="footer_link">
                {
                    footerItems.map(element => (
                        <div className="link" style={mode === true ? (dark, border) : light}>
                            <a rel="noreferrer" target="_blank" href={element.href}>
                                <img style={mode === true ? (dark, name) : light} src={element.src} alt="social_media" />
                                <p style={mode === true ? (dark, name) : light}>{element.name}</p>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className="copyright">
                <p>Copyright © 2022 Shubham. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
