import React, { useState } from 'react';

function Button(props) {
    const handleClick = () => props.onClickFunc(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

// Display Presentational Component
function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incValue) => setCounter(counter+incValue);

    return (
         <div>
            <Button onClickFunc={incrementCounter} increment={1}/>
            <Button onClickFunc={incrementCounter} increment={5}/>
            <Button onClickFunc={incrementCounter} increment={10}/>
            <Button onClickFunc={incrementCounter} increment={100}/>
            <Display message={counter}/>
        </div>
    );
}

export default Counter;