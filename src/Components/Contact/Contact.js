import './Contact.css';
import emailjs from '@emailjs/browser';
import ContactItem from './ContactItem';
import { contactArray } from '../Details.js';
import React, { useEffect, useRef } from 'react';
import { useStateValue } from '../Context/StateProvider';

function Contact({ setProgress, category }) {

  const [{ mode }] = useStateValue();
  const dark = {
    color: 'white',
    backgroundColor: 'rgb(0, 13, 110)'
  };
  const input = {
    border: '1px solid white',
    color: 'white'
  };
  const light = {};

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8akr5tv', 'template_e82dyaj', form.current, '7ARg-ncbFIkKGt125')
      .then(() => {
        alert('SUCCESS! Your form has been submitted.');
      });
    e.target.reset();
  };

  useEffect(() => {
    setProgress(0);
    setTimeout(() => {
      setProgress(100);
    }, 400);
    setProgress(60);
    window.scrollTo(0, 0);
    document.title = `My Portfolio - ${category}`;
  }, []);

  return (
    <>
      <h2 className="header" data-aos="zoom-in">Contact Info</h2>
      <div className="contact_container">
        <div className="contact_main">
          {
            contactArray.map(element => {
              return <ContactItem
                title={element.title}
                logo={element.logo}
                desc={element.desc}
                href={element.href}
              />
            })
          }
        </div>
        <div className="form" onSubmit={sendEmail} style={mode === true ? dark : light}>
          <h3><u>Contact Form</u></h3>
          <form className='input_form' ref={form}>
            <input style={mode === true ? input : light} type="text" name='name' placeholder='Enter your name...' required />
            <input style={mode === true ? input : light} type="email" name='email' placeholder='Enter email...' required />
            <textarea style={mode === true ? input : light} name="message" id="" cols="30" rows="10" placeholder='Enter message...' required></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
