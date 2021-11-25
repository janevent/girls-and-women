import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

export default function BillingDetails({billingDetails, onChangeInput}){

    const {name, email} = billingDetails

    const cardElOptions = {
        style: {
            invalid: {
                color: "darkred",
                iconColor: "darkred"
            },
        },
        hidePostalCode: true
    }
    return(
        <div className="BillingDetails">
            <input onChange={onChangeInput} type="text"name="name" placeholder="Full Name" value={name}/>
            <input onChange={onChangeInput} type="text" placeholder="Email" name="email" value={email}/>
            <CardElement options={cardElOptions} onChange={onChangeInput} /> 
        </div>
    )
}