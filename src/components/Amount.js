import React, { useState } from 'react';


export default function Amount({amount, onIncreaseAmount, onSubmitAmount, onDecreaseAmount}){

    

    return(
        <div className="Amount">
            <h2>Amount To Donate</h2>
            <button type="button" className="increase" onClick={onIncreaseAmount}><p className="arrow up"></p></button>
            <p>{amount}</p>
            <button type="button" className="decrease" onClick={onDecreaseAmount}><p className="arrow down"></p></button>
            <br></br>
            <br></br>
            <button type="submit" name="submit"  className="submitAmount" onClick={onSubmitAmount}>Donate {amount} Now</button>
        </div>
    )
}