import React from 'react';
import {useState} from 'react';

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
            <div>
                <h2>Challenges</h2>
                <p>{paragraph1}</p>
            </div>
            <div>
                <h2>Solutions</h2>
                <p>{paragraph2}</p>
            </div>
            <div className="objectives">
                <h2> Campaign Objectives </h2>
                <ul>
                    {objectives.map(ob => <li>{ob}</li>)}
                </ul>          
            </div>
        </div>
    )

}