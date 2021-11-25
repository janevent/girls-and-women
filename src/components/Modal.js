import BillingDetails from './BillingDetails';
import { useElements, Elements, CardElement } from '@stripe/react-stripe-js';

import { useState } from 'react';

export default function Modal( {display, handleClose, children}){

    const [billingDetails, setBillingDetails] = useState(
    {name: "", email: ""} )
    
    const [paymentDisabled, setPaymentDisabled] = useState(true);

    const stripeElements = useElements();

    const displayOrNotDisplay = display ? "Modal display-block" : "Modal display-none"

    const handleOnChangeInput = (event) => {

        let target = event.target
        
        target && setBillingDetails( { ...billingDetails, [target.name]: target.value} )

        let cardDetails = stripeElements.getElement(CardElement)
        console.log(cardDetails)

        Object.values(billingDetails).some( (deet) => deet === "") || cardDetails._invalid ? setPaymentDisabled(true) : setPaymentDisabled(false)
        //_invalid
        //_empty
    }

    const handlePaymentDisabled = (event) => {

    }

    return(
        <div className={displayOrNotDisplay}>
            <button className="closeModal" onClick={handleClose}>Close</button>
            <h2>Payment Details</h2>
            <BillingDetails billingDetails={billingDetails} onChangeInput={handleOnChangeInput} />
            
        </div>
    )
}