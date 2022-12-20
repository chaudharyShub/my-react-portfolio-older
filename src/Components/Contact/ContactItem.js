import React from 'react';
import './ContactItem.css';
import { useStateValue } from '../Context/StateProvider';

function ContactItem({ title, logo, desc, href }) {

    const [{ mode }] = useStateValue();
    const dark = {
        color: 'white',
        backgroundColor: 'rgb(0, 13, 110)'
    };
    const icon = {
        filter: 'invert(100%)',
    };
    const light = {};

    return (
        <div className="contactItem_main" data-aos="fade-up" style={mode === true ? dark : light}>
            <img src={logo} alt="contact" style={mode === true ? icon : light} />
            <div className="contact_text">
                <h5>{title}</h5>
                <p>{desc}</p>
                <a rel="noreferrer" target="_blank" href={href}>Send a message &rarr;</a>
            </div>
        </div>
    );
};

export default ContactItem;
