import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

export default function BillingDetails({name, email, onChangeInput}){

    const cardElOptions = {
        style: {
            invalid: {
                color: "darkred",
                iconColor: "darkred"
            },
            hidePostalCode: true
        }
    }
    return(
        <div className="BillingDetails">
            <input onChange={onChangeInput} name="name" value={name}/>
            <input onChange={onChangeInput} name="email" value={email}/>
            <CardElement options={cardElOptions} /> 
        </div>
    )
}