import React from 'react';

function MyApp19(props) {
    return (
        <div>
            <Comp address={"서울"} city={"강남"}/>
            <Comp address="한국"/>
            <Comp city="신촌"/>
        </div>
    );
}

function Comp({address = "서울역", city = "제주"}){
    return(
        <div>
            <h3>comp</h3>
            <li>{address}</li>
            <li>{city}</li>
        </div>
    )
}

export default MyApp19;