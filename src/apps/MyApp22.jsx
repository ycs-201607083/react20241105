import React from 'react';

function MyApp22(props) {
    return (<div>
            <Comp score={99} name={"faker"}/>
            <hr/>
            {/*content는 children porp으로 전달*/}
            <Comp>some contents</Comp>

            <hr/>
            <Comp2 city={"런던"} mail={"네이버"}>
                hello
            </Comp2>
            <hr/>
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore, unde? A
                cupiditate distinctio dolores esse magnam nam obcaecati odit quo ratione rerum! Aliquam at consequatur
                explicabo odio perferendis placeat.</p>
        </div>
    );
}

function Comp(props) {
    return (<div>
        <li>{props.score}</li>
        <li>{props.name}</li>
        <li>{props.children}</li>
    </div>);
}

function Comp2({city, mail, children}) {
    return
    <div>
        <li>{city}</li>
        <li>{mail}</li>
        <li>{children}</li>
    </div>
}

function Comp3(props){
    return
    <div>
        <h2>com3</h2>
        {props.children}
    </div>
}

export default MyApp22;