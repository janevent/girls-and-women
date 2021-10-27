import React from 'react';
import {useState} from 'react';

import challenges from '../info/challenges.js';

export default function Description(){

    
    const [subTitle] = useState("Donations go to KAWEECHIPA");
    const [paragraph1, updateParagraph1] = useState(challenges);
    const [paragraph2, updateParagraph2] = useState("text");
    const [image1, updateImage1] = useState("image");

    return (
        <div className="Description">
            <p>{paragraph1}</p>
        </div>
    )

}