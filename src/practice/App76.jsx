import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider, useSearchParams} from "react-router-dom";
import {Box, Input} from "@chakra-ui/react";
import {Button} from "../components/ui/button.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MyHome/>,
    }
])

function App76(props) {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

function MyHome(){
    const [keyWord, setKeyWord] = useState("")
    const [params,setParams] = useSearchParams();

    console.log(params.toString())

    return(
        <Box>
            <Input value={keyWord} onChange={(e) => setKeyWord(e.target.value)}/>
            <Button onClick={() => {
                const p = new URLSearchParams();
                p.set("keyword", keyWord)
                setParams(p)
            }}>검색</Button>
            <hr/>
            <Button onClick={() => {
                const p = new URLSearchParams(params);
                p.set("page", 1);
                setParams(p)
            }}>Page 1</Button>

            <Button onClick={() => {
                const p = new URLSearchParams(params);
                p.set("page", 3);
                setParams(p)
            }}>Page 3</Button>

            <Button onClick={() => {
                const p = new URLSearchParams(params);
                p.set("page", 2);
                setParams(p)
            }}>Page 2</Button>
        </Box>
    );
}

export default App76;