import React from 'react';

function MyApp11(props) {
    return (
        <div>
            <Comp1/>
            <Comp1/>
        </div>
    );
}

function Comp1(){
    return<h1>컴프1</h1>
}

export default MyApp11;
export {Comp1};