import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Amount from './Amount';

export default function Donate(props){
    const [amount, setAmount] = useState(20);
    let history = useHistory()
    const [display, setDisplay] = useState(false)

    const showModal = () => {
        setDisplay(true)
    }

    const hideModal = () => {
        setDisplay(false)
    }

    const onSubmitAmount = (event) => {
        event.preventDefault();
        console.log('onSubmitAmount', amount)
        alert("Thank you for your Donation");
        history.push('/description');
        setDisplay(true)
    }

    const onIncreaseAmount = () => {
        setAmount(amount+5)
    }

    const onDecreaseAmount = () => {
        if(amount>5){
            setAmount(amount-5)
        }
    }

    return (
        <div className="Donate" >   
            <Amount amount={amount} onSubmitAmount={onSubmitAmount} onIncreaseAmount={onIncreaseAmount} onDecreaseAmount={onDecreaseAmount}></Amount>       
        </div>
    )
}