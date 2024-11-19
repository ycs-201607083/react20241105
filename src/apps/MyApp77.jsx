import React, {useEffect, useState} from 'react';
import {createBrowserRouter, Outlet, RouterProvider, useNavigate, useParams} from "react-router-dom";
import {Box, Flex, Input} from "@chakra-ui/react";
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: "view/:customerId",
                element: <CustomerView/>
            },
        ],
    },
]);

function CustomerView(){
   // const params = useParams();
    const {customerId} = useParams();


    // useEffect(() => {
    //     axios.get(`/api/customer/${customerId}`)
    //         .then((res) => res.data)
    //         .then((data) => setCustomer(data))
    // }, [customerId]);
    return <Box>{customerId}번 고객정보</Box>
}

function RootLayout(){
    const [keyword, setKeyword] = useState();
    const nav = useNavigate();
    return (
    <Box>
        <Flex>
            <Box onClick={() => nav("/")}>Home</Box>
            <Box>
                <Input value={keyword} onChange={(e) => {
                    setKeyword(e.target.value)
                }}/>
                <Button onClick={() => {
                    nav(`/view/${keyword}`)
                }}>고객검색</Button>
            </Box>
        </Flex>
        <hr/>
        <Outlet/>
    </Box>
    );
}

function MyApp77(props) {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default MyApp77;