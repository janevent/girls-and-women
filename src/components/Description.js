import React from 'react';
import {useState} from 'react';

import challenges from '../info/challenges.js';
import solutions from '../info/solutions.js';

export default function Description(){

    
    const [subTitle] = useState("Donations go to KAWEECHIPA");
    const [paragraph1, updateParagraph1] = useState(challenges);
    const [paragraph2, updateParagraph2] = useState(solutions);
    const [image1, updateImage1] = useState("image");

    return (
        <div className="Description">
            <div>
                <h3>Challenges</h3>
                <p>{paragraph1}</p>
            </div>
            <div>
                <h3>Solutions</h3>
                <p>{paragraph2}</p>
            </div>
        </div>
    )

}