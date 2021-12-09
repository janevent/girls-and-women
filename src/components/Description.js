import React from 'react';
import {useState} from 'react';

import robin from "./robin-kutesa-unsplash.jpg";
import element5 from "./element5-digital-unsplash.jpg";
import challenges from '../info/challenges.js';
import solutions from '../info/solutions.js';
import points from '../info/points.js';

export default function Description(){

    
    const [subTitle] = useState("Donations go to KAWEECHIPA");
    const [paragraph1, updateParagraph1] = useState(challenges);
    const [paragraph2, updateParagraph2] = useState(solutions);
    const [objectives, updateObjectives] = useState(points);
    const [image1, updateImage1] = useState("image");

    return (
        <div className="Description">
            <div className="description-div">
            </div>
            <div className="description-div">
                <h2 className="description-title">Challenges</h2>
                <p className="description-p">{paragraph1}</p>
            </div>
            <div className="description-div">
                <img src={robin} alt="water droplet on leaves" width="900px" height="auto" />
            </div>
            <div className="description-div">
                <h2 className="description-title">Solutions</h2>
                <p className="description-p">{paragraph2}</p>
            </div>
            <div className="description-div">
                <img src={element5} alt="stack of books with an apple on top"  width="800px" height="auto" />
            </div>
            <div className="objectives">
                <h2 className="description-title"> Campaign Objectives </h2>
                <ul>
                    {objectives.map(ob => <li className="description-li">{ob}</li>)}
                </ul>          
            </div>
            <div className="where">
                <h2 className="description-title">Where</h2>
                <p className="description-p">This project will be implemented in the Buganda region located in Central Uganda on the
shores of Lake Victoria.</p>
            </div>
        </div>
    )

}