import React from 'react';
import {useState} from 'react';

import robin from "./robin-kutesa-unsplash.jpg";
import element5 from "./element5-digital-unsplash.jpg";
import challenges from '../info/challenges.js';
import solutions from '../info/solutions.js';
import points from '../info/points.js';
import about from '../info/about.js';

export default function Description(){

    
    const [subtitle] = useState("Donations go to KAWEECHIPA");
    const [parAbout, updateParAbout] = useState(about)
    const [paragraph1, updateParagraph1] = useState(challenges);
    const [paragraph2, updateParagraph2] = useState(solutions);
    const [objectives, updateObjectives] = useState(points);
    const [image1, updateImage1] = useState("image");

    return (
        <div className="Description">
            <div className="description-div">
                <h2 className="description-title">
                    Join KAWEECHIPA to educate, and provide essential sanitary pads to girls affected by poverty in Uganda, Africa.
                </h2>
                <h3 className="subtitle">{subtitle}</h3>
            </div>
            <div className="where">
                <h2 className="description-title">Where</h2>
                <p className="description-p">This project will be implemented in the Buganda region located in Central Uganda on the
shores of Lake Victoria.</p>
            </div>
            <div className="description-div">
                <h2 className="description-title">About Campaign</h2>
                {parAbout.map((par) => <p className="description-p">{par}</p>) }
            </div>
            <div className="description-div">
                <h2 className="description-title">Challenges</h2>
                <p className="description-p">{paragraph1}</p>
            </div>
            <div className="description-div">
                <img src={robin} alt="water droplet on leaves" height="auto" />
            </div>
            <div className="description-div">
                <h2 className="description-title">Solutions</h2>
                <p className="description-p">{paragraph2}</p>
            </div>
            <div className="description-div">
                <img src={element5} alt="stack of books with an apple on top"   height="auto" />
            </div>
            <div className="objectives">
                <h2 className="description-title"> Campaign Objectives </h2>
                <ul>
                    {objectives.map(ob => <li className="description-li">{ob}</li>)}
                </ul>          
            </div>
        </div>
    )

}