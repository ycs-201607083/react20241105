import React from 'react';

function App10(props) {
    const a = [
        {
            name: "son",
            age: 30
        },
        {
            name: "faker",
            age: 29
        },
        {
            name: "rose",
            age: 23
        },
        {
            name: "lee",
            age: 25
        },
        {
            name: "kim",
            age: 35
        },
        {
            name: "kang",
            age: 37
        }
    ];


    //30세 이상인 사람 이름만 출력
    return (
        <div>
            {a.filter((item) => item.age >= 30).map((i) => (<h1>{i.name}</h1>))}
        </div>
    );
}

export default App10;