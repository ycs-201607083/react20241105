import React from 'react';

function MyApp5(props) {
    return (
        <div>
            <div><Comp1/>
                <div><Comp2/>
                    <div><Comp3/>
                    </div>
                    );
                    }
                    function Comp1(){
                        return <h1>hi</h1>;
                    }
                    function Comp2(){
                        //fragemt - root component 필요없을 때 사용
                        return(
                        <div>
                        <h3>Lorem ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        );
                    }

                    function Comp3(){
                        return <div>
                        <h3>Lorem ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    }

                    export default MyApp5;