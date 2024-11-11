import React, {useState} from 'react';
import {Input} from "@chakra-ui/react";

function App37(props) {
    const [inputText, setInputText] = useState()

    function fun1(e){
        setInputText(e.target.value)
    }
    return (
        <div>
            <input style={{backgroundColor : "yellowgreen"}} onKeyUp={fun1}/>
            <p
                style = {{backgroundColor:"green", width:"500px", height:"500px"}}>
                {console.log({inputText})}
                {inputText}
            </p>
        </div>
    );
}

export default App37;