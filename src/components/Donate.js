import { useState } from 'react';

import Amount from './Amount';

export default function Donate(){
    const [amount, setAmount] = useState(5);

    return (
        <div className="Donate" >
            <Amount amount={amount}></Amount>
        </div>
    )
}