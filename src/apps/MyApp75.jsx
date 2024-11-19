import React from 'react';
import {createBrowserRouter, RouterProvider, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MyHome/>
    }
])

function MyApp75(props) {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}

function MyHome() {
    const navigate = useNavigate();
    const location = useLocation();
    const [param] = useSearchParams()

    console.log("location", location.search)
    console.log("param", param)
    console.log("param", param.toString())
    param.append("age", 33)
    param.append("name", "son")
    console.log("param", param.toString())

    const handleClick = () => {
        const p = new URLSearchParams()
        p.append("page", 1)
        p.append("keyword", "한강")
        p.append("type", "author")
        axios.get(`/api/main9/list?${p}`)
    }

    return (
        <Box>
            <Button onClick={() => navigate("/?page=1")}>1</Button>
            <Button onClick={() => navigate("/?page=2")}>2</Button>
            <Button onClick={() => navigate("/?page=3")}>3</Button>
        </Box>
    );
}

export default MyApp75;