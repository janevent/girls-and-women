import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

export default function BillingDetails(){

    return(
        <div className="BillingDetails">
            <CardElement/> 
        </div>
    )
}