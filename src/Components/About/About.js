import './About.css';
import { aboutText } from '../Details';
import React, { useEffect } from 'react';
import My_Resume from '../../images/My_Resume.pdf';
import { useStateValue } from '../Context/StateProvider';

function About({ setProgress, category }) {

  const [{ mode }] = useStateValue();
  const dark = {
    color: 'white',
    backgroundColor: 'rgb(0, 13, 110)',
  };
  const viewResume = {
    border: '1px solid rgb(0, 13, 110)'
  }
  const light = {};

  useEffect(() => {
    setProgress(0);
    setTimeout(() => {
      setProgress(100);
    }, 300);
    setProgress(60);
    window.scrollTo(0, 0);
    document.title = `My Portfolio - ${category}`;
  }, []);

  return (
    <div
      className='about_main'
      data-aos="fade-up"
      style={mode === true
        ? dark
        : light}
    >
      <h1>
        <span className='heading'>About Me</span>
      </h1>

      <p className="paragraph">{aboutText}</p>

      <a rel="noreferrer"
        href={My_Resume}
        target="_blank"
        className='view_resume'
        style={mode === true
          ? viewResume
          : light}
      >View Resume &rarr;</a>

      <a rel="noreferrer"
        href={My_Resume}
        download
        className="download"
      >Download Resume</a>
    </div>
  );
};

export default About;
