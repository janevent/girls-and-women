import BillingDetails from './BillingDetails';
import { useElements, Elements, CardElement, useStripe, loadStripe } from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Stripe from 'stripe';

export default function Modal( {display, handleClose, amount, handleDisplay}){

    const [billingDetails, setBillingDetails] = useState(
    {name: "", email: ""} )
    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const [err, setErr] = useState("")
    const [successfulPayment, setSuccessfulPayment] = useState(false)
    const [cardRef, setCardRef] = useState(null)

    const stripeElements = useElements();

    const stripe = useStripe();

    const displayOrNotDisplay = display ? "Modal display-block" : "Modal display-none"

    let history = useHistory()

    const handleOnChangeInput = (event) => {

        let target = event.target
        
        target && setBillingDetails( { ...billingDetails, [target.name]: target.value} )

        let cardDetails = stripeElements.getElement(CardElement)
        //console.log(cardDetails)
        console.log('invalid', cardDetails._invalid)

        Object.values(billingDetails).some( (deet) => deet === "") || cardDetails._invalid ? setPaymentDisabled(true) : setPaymentDisabled(false)
        //_invalid
        //_empty
    }

    const handleSubmitPayment = async () => {
        //what to say if form is incomplete
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
        })
        // .catch((error) => {
        //     console.log(error)
        //     Console.alert('Error: Payment Not Processed')
        //     return
        // })
        console.log('createPaymentIntent:', createPaymentIntent)
        if(createPaymentIntent.status >= 400 && createPaymentIntent.status < 600){
            alert("Bad response from server. Payment not processed.")
            return
        }
        const paymentIntentDetails = await createPaymentIntent.json();
        console.log('response', paymentIntentDetails)
        
        //how to handle 500 internal server error
        

        const clientSecret = paymentIntentDetails.paymentIntent.client_secret
        //console.log(paymentIntentDetails.paymentIntent)
        //console.log('cs', clientSecret)    
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
            setErr(error.message)
            console.log('error', error)
            alert(error.message)
            //perhaps setPaymentDisabled to false
            setPaymentDisabled(false)
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
            await setErr(result.error.message)
            console.log('result error', result.error)
            console.log('message', result.error.message)
            console.log('err', err)
            alert(result.error.message)
            
            //set payment disabled to false
            setPaymentDisabled(false)
            return
        }

        console.log(result)

        setSuccessfulPayment(true)
        //push to success page
       //updateDisplay function
       handleClose()
       handleDisplay(true)
       clearInputs()
       history.push('/success')
    }
    //in handleSubmitPayment and handleClose clear card ref
    const clearInputs = () => {
        setBillingDetails({name: "", email: ""})
        cardRef.clear()
    }
    return(
        <div className={displayOrNotDisplay}>
            <div className="closeButtonContainer"><button className="closeModal" onClick={clearInputs} onClickCapture={handleClose} >Close</button></div>
            <h2>Payment Details</h2>
            <BillingDetails billingDetails={billingDetails} onChangeInput={handleOnChangeInput} paymentDisabled={paymentDisabled} submitPayment={handleSubmitPayment} handleDisplay={handleDisplay} setCardRef={setCardRef}/>
            
        </div>
    )
}