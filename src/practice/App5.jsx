import React from 'react';

function App5(props) {
    return (
        <div>
            <Comp1/>
            <Comp2/>
            <Comp3/>
        </div>

    );
}

function Comp1() {
    return (
        <h1 className="error">Lorem.</h1>
    )
}

function Comp2() {
    return (
        <div>
            <label htmlFor={"check1"}>동의</label>
            <input type={"checkbox"} id={"check1"}/>
        </div>
    )
}

function Comp3() {
    return (
        <h3>
            <hello></hello>
        </h3>
    )
}

export default App5;