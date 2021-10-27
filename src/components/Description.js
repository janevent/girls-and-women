import React from 'react';
import {useState} from 'react';

import challenges from '../info/challenges.js';

export default function Description(){

    
    [subTitle] = useState("Donations go to KAWEECHIPA");
    [paragraph1, updateParagraph1] = useState(challenges);
    [paragraph2, updateParagraph2] = useState("text");
    [image1, updateImage1] = useState("image");

    return (
        <div className="Description">
            <p>{paragraph1}</p>
        </div>
    )

}