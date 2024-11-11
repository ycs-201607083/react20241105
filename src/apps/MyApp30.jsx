import React from 'react';
import {Box} from "@chakra-ui/react";

function MyApp30(props) {
    return (
        <div>
            <h5>컴포넌트 색상</h5>
            <Box h={5} bgColor="cyan"></Box>
            <Box h={5} bgColor={"deeppink"}></Box>
            <Box h={5} bgColor={"deepskyblue"}></Box>
            <Box h={5} bgColor={"lightgoldenrodyellow"}></Box>
            <Box h={5} bgColor={"darkgoldenrod"}></Box>
            <Box h={5} bgColor={"goldenrod"}></Box>
            <h5>컴포넌트 크기</h5>
            <Box bgColor={"blue"} h={5} w={"1/3"}></Box>
            <Box bgColor={"orange"} h={5} w={"1/4"}></Box>
            <Box bgColor={"lightblue"} h={5} w={"1/5"}></Box>
            <Box bgColor={"lightcyan"} h={5} w={"1/6"} p={2.5}></Box>

            <hr/>

            <Box
                w={"200px"}
                h={"100px"}
                ml={"20px"}
                p={"10px"}
                bg={"red"}>
                차크라UI Box
            </Box>

            <Box
                w={"200px"}
                h={"100px"}
                ml={"5"}
                p={"2.5"}
                bg={"yellowgreen"}>
                차크라UI Box
            </Box>

            <div
                style={{
                    width:"200px",
                    height:"100px",
                    marginLeft : "20px",
                    padding:"10px",
                    backgroundColor:"green",
                }}
            >
                컴포넌트
            </div>
        </div>
    );
}

export default MyApp30;