import './Home.css';
import hero from '../../images/hero.JPG';
import React, { useEffect } from 'react';
import { useStateValue } from '../Context/StateProvider';

function Home({ setProgress, category }) {

  const [{ mode }] = useStateValue();
  const dark = {
    color: 'white',
    backgroundColor: 'rgb(0, 13, 110)',
  };
  const spanColor = {
    backgroundColor: 'white'
  };
  const heading = {
    color: 'black'
  };
  const image = {
    border: '2px solid white'
  };
  const light = {};

  useEffect(() => {
    setProgress(0);
    setTimeout(() => {
      setProgress(100);
    }, 200);
    setProgress(80);
    window.scrollTo(0, 0);
    document.title = `My Portfolio - ${category}`;
  }, []);

  return (
    <div data-aos="fade-up" className="home_main" style={mode === true ? dark : light}>
      <div className="name_outer">
        <div className="name">
          <h2>Hello, </h2>
          <h2>My Name is </h2>
          <h2
            style={mode === true
              ? (dark, heading)
              : light}
          > <span
            style={mode === true
              ? (dark, spanColor)
              : light}
          > Shubham </span> </h2>
          <h2
            style={mode === true
              ? (dark, heading)
              : light}
          > <span
            style={mode === true
              ? (dark, spanColor)
              : light}
          > Chaudhary </span> </h2>
        </div>
        <img
          src={hero}
          style={mode === true
            ? (dark, image)
            : light}
          alt='myImage'
          data-aos-delay="400"
          data-aos="zoom-in"
        />
      </div>
      <p className='welcome'>WELCOME TO MY PORTFOLIO &rarr;</p>
    </div>
  );
};

export default Home;
