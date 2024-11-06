import React from 'react';

function App9(props) {
    const a = ["black", "pink", "faker", "hankang"];
    const map = a.map((item) => <h1>{item}</h1>)
    return (
        <div>
            {map}
        </div>
    );
}

export default App9;