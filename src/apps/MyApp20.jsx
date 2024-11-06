import React from 'react';

function MyApp20(props) {
    const obj = {
        title: "채식주의자",
        author: "한강"
    }
    return (
        <div>
            <Comp title={obj.title} price={obj.author}/>
            <Comp {...obj}/>
        </div>
    );
}

function Comp(props) {
    return(
        <div>
            <h3>comp</h3>
            <li>{props.title}</li>
            <li>{props.author}</li>
        </div>
    );
}

export default MyApp20;