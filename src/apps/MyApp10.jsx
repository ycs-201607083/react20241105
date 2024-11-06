import React from 'react';

function MyApp10(props) {
    const a = [
        {
            product: "milk",
            expired: false
        },
        {
            product: "chocolate",
            expired: true
        },
        {
            product: "pizza",
            expired: false
        },
        {
            product: "coffee",
            expired: true
        }
    ];

    const f = a.filter((item) => item.expired);
    console.log(f)

    f.map(item => <h1>{item.product}</h1>)
    console.log(f)
    return (
        <div>
            {a.filter((item) => item.expired).map((item) => (<h1>{item.product}</h1>))}
        </div>
    );
}

export default MyApp10;