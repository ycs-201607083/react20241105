import React from 'react';

function Comp1() {
    const a = {
        name: "som",
        married: true
    };
    const b = {
        name: "rose",
        married: false
    }
    const c = {
        name: "bruno",
        married: true
    }

    return (
        <div>
            <li>{true ? a.name : ""}</li>
            <li>{true ? b.name : ""}</li>
            <li>{true ? "" : c.name}</li>
            <hr/>
            {a.married && <li>{a.name} </li>}
            {a.married || <li>{b.name} </li>}
            {a.married && <li>{c.name} </li>}
        </div>
    )
}

function MyApp8(props) {
    const a = "hi";
    const b = 3;
    const c = 5;
    const d = "son";
    return (
        <div>
            <Comp1/>
            <h1>{a}</h1>
            <h1>{b + c}</h1>
            <h1>
                {b} + {c} = {b + c}
            </h1>
            <h1>{d}</h1>
            <h1>{true && d}</h1>
            <h1>{false || d}</h1>
            <h1>{true ? d : ""}</h1>
            <h1>{false ? "" : d}</h1>
        </div>
    );
}

export default MyApp8;