import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

function Navbar() {

    const [{ mode }, dispatch] = useStateValue();
    const [innerText, setInnerText] = useState('Enable Dark Mode');

    function changeTheme() {
        if (mode === true) {
            dispatch({
                type: "ENABLE_LIGHT_MODE"
            });
            setInnerText('Enable Dark Mode');
        } else {
            dispatch({
                type: "ENABLE_DARK_MODE"
            });
            setInnerText('Enable Light Mode');
        };
    };

    const nav = {
        backgroundColor: 'rgb(0, 13, 110)',
        borderBottom: '1px solid white'
    };
    const link = {
        backgroundColor: 'white',
        border: '2px solid black'
    };
    const light = {};

    return (
        <>
            <div className="navbar_main"
                style={mode === true
                    ? nav
                    : light}>
                <div className="main_content">
                    <p className=" logo"
                        data-aos="zoom-out"
                        data-aos-delay="400">
                        &lt;Shubham Chaudhary /&gt;
                    </p>
                    <div className="list_main">
                        <Link
                            className='list_item'
                            style={mode === true
                                ? link
                                : light}
                            to="/#"> Home
                        </Link>

                        <Link
                            className='list_item'
                            style={mode === true
                                ? link
                                : light}
                            to="/about"> About
                        </Link>

                        <Link
                            className='list_item'
                            style={mode === true
                                ? link
                                : light}
                            to="/projects"> Projects
                        </Link>

                        <Link
                            className='list_item'
                            style={mode === true
                                ? link
                                : light}
                            to="/contact"> Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className="toggle_switch">
                <a onClick={changeTheme}>{innerText} </a>
            </div>
        </>
    );
};

export default Navbar;
