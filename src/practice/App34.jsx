import React from 'react';
import {Box, HStack} from "@chakra-ui/react";

function App34(props) {

    function event(e) {
        console.log(e.target.innerText)
    }

    return (
        <div>
            <HStack h={20}>
                <Box h={20} bg={"orange"} onClick={(e) => event(e)}>Lorem ipsum dolor.</Box>
                <Box h={20} bg={"blue"} onClick={(e) => event(e)}>sit amet, consectetur.</Box>
                <Box h={20} bg={"teal"} onClick={(e) => event(e)}>adipisicing elit. Dolorem!</Box>
            </HStack>
        </div>
    );
}

export default App34;