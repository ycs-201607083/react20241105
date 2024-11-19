import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import MyApp70 from "./MyApp70.jsx";
import MyApp69 from "./MyApp69.jsx";
import App70 from "../practice/App70.jsx";
import App69 from "../practice/App69.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <div>홈페이지</div>
        },
        {
            path: "/path1",
            element: <div>여기는 1번 경로
                <hr/>
                <Outlet/>
            </div>,
            children: [
                {
                    index: true,
                    element: <div>여기는 경로1의 홈페이지</div>
                },
                {
                    path: "sub1",
                    element: <div>경로1/서브1</div>
                }, {
                    path: "sub2",
                    element: <div>경로1서브2</div>
                }
            ]
        },
        {
            path: "/path2",
            element: <div>여기는 2번 경로</div>
        },
        {
            path: "/path3",
            element: <div>경로 3
                <hr/>
                <Outlet/>
            </div>,
            children:[
                {
                    index: true,
                    element: <div>여기는 경로3의 홈페이지</div>
                },
                {
                    path: "sub1",
                    element: <div>경로 패스3 서브1</div>
                },
                {
                    path: "sub2",
                    element: <div>경로 패스3 서브2</div>
                }
            ]
        },
        {
            path: "/path4",
            element: <div>경로 4</div>
        },
        {
            path: "/path1/sub1",
            element: <div>경로 sub1</div>
        },
        {
            path: "/path1/sub2",
            element: <div>경로 sub2</div>
        }
    ]
);

function MyApp71(props) {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

export default MyApp71;