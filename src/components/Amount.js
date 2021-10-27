import React from 'react';

export default function Amount({amount}){
    return(
        <div className="Amount">
            <h2>Amount To Donate</h2>
            <p>{amount}</p>
            <button type="submit" name="submit" value="Donate Now">Donate Now</button>
        </div>
    )
}