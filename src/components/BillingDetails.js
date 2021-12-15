import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

export default function BillingDetails( {billingDetails, onChangeInput, paymentDisabled, submitPayment, setCardRef} ){

    const {name, email} = billingDetails

    const [ ref, setRef] = useState(null)

    const buttonDisabled = (paymentDisabled)

    const cardElOptions = {
        style: {
            invalid: {
                color: "darkred",
                iconColor: "darkred"
            },
            base: {
                backgroundColor: "lightgrey"
                
            
            }
        },
        hidePostalCode: true
    }
    return(
        <div className="BillingDetails">
            
            <input onChange={onChangeInput} type="text"name="name" placeholder="Full Name" value={name}/>
            <input onChange={onChangeInput} type="text" placeholder="Email" name="email" value={email}/>
            <div className="card-input">< CardElement options={cardElOptions} onReady={e => setCardRef(e) } onChange={onChangeInput} /> </div>
            <button type="button" name="submit-payment" id="submitPayment" disabled={buttonDisabled} onClick={submitPayment} >Submit Payment</button>
        </div>
    )
}