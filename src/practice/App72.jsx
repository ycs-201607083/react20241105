import React from 'react';
import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import {Box, Flex} from "@chakra-ui/react";

const router = createBrowserRouter([
    {
        path: "/",
        element : <WholePage/>,
        children:[
            {
                index:true,
                element: <div>HOME PAGE</div>
            },
            {
                path:"/add",
                element:<div>글작성 페이지</div>
            },
            {
                path:"/view",
                element:<div>작성 글 보기 페이지</div>
            }
        ]
    }
])
// /
// /add
// view
function App72(props) {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

function WholePage(){

    return (
        <Box>
            <Flex justify={"space-between"}>
                <Box>
                    <Link to="/">HomePage</Link>
                </Box>
                <Box>
                    <Link to="/add">addPage</Link>
                </Box>
                <Box>
                    <Link to="/view">ViewPage</Link>
                </Box>
            </Flex>
            <hr/>
            <Outlet/>
        </Box>
    );
}

export default App72;