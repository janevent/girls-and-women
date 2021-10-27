import { useState } from 'react';

import Amount from './Amount';

export default function Donate(){
    const [amount, setAmount] = useState(5);

    const onSubmitAmount = (event) => {
        event.preventDefault();

    }

    return (
        <div className="Donate" >
            <Amount amount={amount} onSubmitAmount={onSubmitAmount}></Amount>
        </div>
    )
}