import BillingDetails from './BillingDetails';
import { useElements, Elements, CardElement } from '@stripe/react-stripe-js';

import { useState } from 'react';

export default function Modal( {display, handleClose, amount}){

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
        console.log('invalid', cardDetails._invalid)

        Object.values(billingDetails).some( (deet) => deet === "") || cardDetails._invalid ? setPaymentDisabled(true) : setPaymentDisabled(false)
        //_invalid
        //_empty
    }

    const handleSubmitPayment = async () => {
        setPaymentDisabled(true)
        console.log('submit payment', billingDetails)
        const createPaymentIntent = await fetch('/netlify/functions/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({ amount })
        }
        )
        const paymentIntentDetails = await createPaymentIntent.json();

        const clientSecret = paymentIntentDetails.paymentIntent.client_secret

        //push history to success page
    }

    return(
        <div className={displayOrNotDisplay}>
            <button className="closeModal" onClick={handleClose}>Close</button>
            <h2>Payment Details</h2>
            <BillingDetails billingDetails={billingDetails} onChangeInput={handleOnChangeInput} paymentDisabled={paymentDisabled} submitPayment={handleSubmitPayment} />
            
        </div>
    )
}