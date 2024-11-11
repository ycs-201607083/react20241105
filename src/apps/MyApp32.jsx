import React from 'react';
import {Box, Flex, HStack, Stack} from "@chakra-ui/react";

function MyBox({ color }) {
    return (
        <>
            <Box
                w={{
                    base: "100%",
                    md: "3/6",
                    lg: "1/3",
                }}
                style={{ height: "80px", backgroundColor: color }}
            ></Box>
        </>
    );
}
function MyApp32(props) {
    return (
        <div>
            <h5>컴포넌트 배치</h5>
            <HStack>
                <Box border={"5px solid black"} w={"1/3"} bg={"red"} >1</Box>
                <Box border={"5px solid black"} w={"1/3"} bg={"yellow"} >2</Box>
                <Box border={"5px solid black"} w={"1/3"} bg={"green"} >3</Box>
            </HStack>
            <Stack direction={{base:"row", md:"column"}}>
                <Box h={20} bg={"orange"}>1</Box>
                <Box h={20} bg={"skyblue"}>2</Box>
                <Box h={20} bg={"lightblue"}>3</Box>
            </Stack>
            <Flex wrap={"wrap"}>
                <MyBox color={"orange"} />
                <MyBox color={"skyblue"} />
                <MyBox color={"gray"} />
            </Flex>

            <hr/>

            <Flex wrap={"wrap"}>
                <Box
                    w={{
                        base: "100%",
                        md: "3/6",
                        lg: "1/3",
                    }} style={{height: "80px", backgroundColor: "red"}}>
                    1
                </Box>
                <Box
                    w={{
                    base: "100%",
                    md: "3/6",
                    lg: "1/3",
                }} style={{height: "80px", backgroundColor: "blue"}}> 2< /Box>
                <Box
                    w={{
                    base: "100%",
                    md: "3/6",
                    lg: "1/3",
                }} style={{height: "80px", backgroundColor: "skyblue"}}>3</Box>
            </Flex>
            <Flex justify={"space-between"}>
                <div style={{height: "80px", backgroundColor: "red"}}>1</div>
                <div style={{height: "80px", backgroundColor: "blue"}}> 2< /div>
                <div style={{height: "80px", backgroundColor: "skyblue"}}>3</div>
            </Flex>
            <hr/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{height: "80px", backgroundColor: "red"}}>1</div>
                <div style={{height: "80px", backgroundColor: "blue"}}> 2< /div>
                <div style={{height: "80px", backgroundColor: "skyblue"}}>3</div>
            </div>

            <div style={{height: "80px", backgroundColor: "red"}}>1</div>
            <div style={{height: "80px", backgroundColor: "blue"}}> 2< /div>
            <div style={{height: "80px", backgroundColor: "skyblue"}}>3</div>
        </div>
    );
}

export default MyApp32;