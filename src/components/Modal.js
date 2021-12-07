import BillingDetails from './BillingDetails';
import { useElements, Elements, CardElement, useStripe, loadStripe } from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Stripe from 'stripe';

export default function Modal( {display, handleClose, amount, handleDisplay}){

    const [billingDetails, setBillingDetails] = useState(
    {name: "", email: ""} )
    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const [error, setError] = useState("")
    const [successfulPayment, setSuccessfulPayment] = useState(false)

    const stripeElements = useElements();

    const stripe = useStripe();

    const displayOrNotDisplay = display ? "Modal display-block" : "Modal display-none"

    let history = useHistory()

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

        const thisAmount = amount * 100
        let email = billingDetails.email
        const createPaymentIntent = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'authorization/json'
            },
            body: JSON.stringify({ amount: thisAmount, receipt_email: email })
        }
        )
        const paymentIntentDetails = await createPaymentIntent.json();

        const clientSecret = paymentIntentDetails.paymentIntent.client_secret
        console.log(paymentIntentDetails.paymentIntent)
        console.log('cs', clientSecret)

    
        const formattedBillingDetails = {
                name: billingDetails.name,
                email: billingDetails.email
            }

        const cardDetails = stripeElements.getElement(CardElement);

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardDetails,
            billing_details: formattedBillingDetails
        })

        if(error){
            setError(error.message)
            console.log('error', error)
            return
        }

        const paymentMethodId = paymentMethod.id

        console.log('id', paymentMethodId)

        const result = await stripe.confirmCardPayment(
            clientSecret,
            { payment_method: paymentMethodId }
        )
            //show spinner, and error if there is
        if(result.error){
            setError(result.error)
            return
        }

        console.log(result)

        setSuccessfulPayment(true)
        //push to success page
       //updateDisplay function
       handleClose()
       handleDisplay(true)
       history.push('/success')
    }

    return(
        <div className={displayOrNotDisplay}>
            <button className="closeModal" onClick={handleClose}>Close</button>
            <h2>Payment Details</h2>
            <BillingDetails billingDetails={billingDetails} onChangeInput={handleOnChangeInput} paymentDisabled={paymentDisabled} submitPayment={handleSubmitPayment} />
            
        </div>
    )
}