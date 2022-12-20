import React from 'react';
import './ProjectItem.css';
import { useStateValue } from '../Context/StateProvider';

function ProjectItem({ img, title, desc, tech_stack, href }) {

    const [{ mode }] = useStateValue();
    const dark = {
        color: 'white',
        backgroundColor: 'rgb(0, 13, 110)'
    };
    const light = {};

    return (
        <div data-aos="fade-up" className="projectItem_main" >
            <div className="image">
                <img src={img} alt="project" />
            </div>
            <div
                className="text_area"
                style={mode === true
                    ? dark
                    : light}
            >
                <h4>{title}</h4>
                <p>{desc}</p> <br />
                <p>𝙏𝙚𝙘𝙝 𝙎𝙩𝙖𝙘𝙠 =&#62; {tech_stack}</p>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href={href}
                >View Live &#8599;
                </a>

            </div>
        </div>
    );
};

export default ProjectItem;
