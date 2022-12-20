import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Components/Home/Home';
import { useState, useEffect } from 'react';
import About from './Components/About/About';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { useStateValue } from './Components/Context/StateProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [progress, setProgress] = useState(0);
  const wave = String.fromCodePoint(0x1F44B);
  const [{ mode }] = useStateValue();
  const dark = {
    color: 'white',
    backgroundColor: 'black',
    topLoadingBarColor: 'white'
  }
  const light = {
    color: 'black',
    backgroundColor: 'white',
    topLoadingBarColor: 'yellowgreen'
  }

  function setProgressFunction(progress) {
    setProgress(progress);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log
      (
        wave
        + ' Hello Viewer!!!'
        + '%cHave a nice day!',
        `font-size: 20px; background-color: yellow; margin-top: 10px; color:red;`
      );
    AOS.init({
      animatedClassName: 'aos-animate',
      duration: 700,
      easing: 'ease',
      once: false,
    });
  }, []);

  return (
    <div className='app_main' style={mode === true ? dark : light}>
      <Router>
        <LoadingBar
          height={3}
          color={mode === true ? dark.topLoadingBarColor : light.topLoadingBarColor}
          loaderSpeed={600}
          progress={progress}
          onLoaderFinished={() => setProgressFunction(0)}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home category="Home" setProgress={setProgressFunction} />} />
          <Route exact path='/about' element={< About category="About" setProgress={setProgressFunction} />} />
          <Route exact path='/projects' element={< Project category="Projects" setProgress={setProgressFunction} />} />
          <Route exact path='/contact' element={< Contact category="Contact" setProgress={setProgressFunction} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
