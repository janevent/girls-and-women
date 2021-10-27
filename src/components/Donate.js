import { useState } from 'react';

import Amount from './Amount';

export default function Donate(){
    const [amount, setAmount] = useState(5);

    const onSubmitAmount = (event) => {
        event.preventDefault();
        console.log('onSubmitAmount', amount)
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