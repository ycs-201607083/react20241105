import React from 'react';

function MyApp7(props) {
    const a = "hello";
    const b = 3.14;
    const c = true;
    const d = false;

    const e = <Comp1/>;

    return (
        <div>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
            <li>{c.toString()}</li>
            <li>{d.toString()}</li>
            <input type={"text"} readOnly={c}/>
            <hr/>
            <input type={"text"} readOnly={d}/>
            <hr/>
            {e}
            <hr/>
            <Comp1/>
        </div>
    );
}

function Comp1(){
    return (
        <div>
            <h1>컴포넌트</h1>
        </div>
    )
}

export default MyApp7;