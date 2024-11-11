import React, {useState} from 'react';
import {Button} from "../components/ui/button.jsx";
import {Box} from "@chakra-ui/react";

function MyApp37(props) {
    const [number, setNumber] = useState(0)

    function numUp(){
        setNumber(number + 1)
    }
    return (
        <div>
            <Button onClick={numUp}>값 증가</Button>
            <Button onClick={() => setNumber(number -1)}>값 감소</Button>

            <Box>number : {number}</Box>
        </div>
    );
}

export default MyApp37;