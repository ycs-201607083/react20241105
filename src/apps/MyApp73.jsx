import React, {useState} from 'react';
import {createBrowserRouter, Link, Outlet, RouterProvider, useNavigate} from "react-router-dom";
import {Box, Flex} from "@chakra-ui/react";
import {Button} from "../components/ui/button.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <WholePage/>,
    children: [
        {
            index: true,
            element: <div>Home Page</div>
        },
        {
            path: "sub1",
            element: <div>sub1 page</div>
        },
        {
            path: "sub2",
            element: <div>sub2 page</div>
        }
    ]
}])

function MyApp73(props) {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

function WholePage() {
    const [count, setCount] = useState(0)
    let navigate = useNavigate();
    return (
        <Box>
            <Box>
                <Flex justify={"space-between"}>
                    <Box>
                        <Button onClick={() => navigate("/")}>Home</Button>
                    </Box>
                    <Box>
                        <Button  onClick={() => navigate("/sub1")}>sub1</Button>
                    </Box>
                    <Box>
                        <Button  onClick={() => navigate("/sub2")}>sub2</Button>
                    </Box>
                    <Button onClick={() => {
                        setCount(count + 1)
                    }}>{count}</Button>
                </Flex>
            </Box>
            <hr/>
            <Outlet/>
        </Box>
    );
}

export default MyApp73;