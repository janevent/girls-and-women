import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';
import Amount from './Amount';

export default function Donate(props){
    const [amount, setAmount] = useState(20);
    let history = useHistory()
    const [display, setDisplay] = useState(false)

    const children = []

    const showModal = () => {
        setDisplay(true)
    }

    const hideModal = () => {
        setDisplay(false)
    }

    const onSubmitAmount = (event) => {
        event.preventDefault();
        console.log('onSubmitAmount', amount)
        setDisplay(true);
        //console.log('display', display)
        //alert("Thank you for your Donation");
        //history.push('/description');
        
    }

    const handleClose = () => {
        setDisplay(false)
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
            <Modal handleClose={handleClose} display={display} children={children} amount={amount} />
        </div>
    )
}