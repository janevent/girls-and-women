import React from 'react';
import {useState} from 'react';

export default function Dashboard(){

    const [display, setDisplay] = useState(false)

    const showModal = () => {
        setDisplay(true)
    }

    const hideModal = () => {
        setDisplay(false)
    }
}