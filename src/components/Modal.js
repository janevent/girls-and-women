import BillingDetails from './BillingDetails';
import { useElements } from '@stripe/react-stripe-js';

import { useState } from 'react';

export default function Modal( {display, handleClose, children}){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const stripeElements = useElements();

    const displayOrNotDisplay = display ? "Modal display-block" : "Modal display-none"

    const handleOnChangeInput = (event) => {
        const { name, value } = event.target
        console.log('name', name, 'value', value)
        if(name==="name"){
            setName(value)
        }else if(name==="email"){
            setName(value)
        }
    }

    return(
        <div className={displayOrNotDisplay}>
            <h2>Payment Details</h2>
            <BillingDetails name={name} email={email} onChangeInput={handleOnChangeInput} />
            <button onClick={handleClose}>Close</button>
        </div>
    )
}