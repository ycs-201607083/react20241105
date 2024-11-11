import React from 'react';
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp57(props) {
    return (
        <div>
            <Button onClick={() => {
                axios.get("/hi")
            }}>getget</Button>

            {/*javaScript 사용*/}
            <Button onClick={() => {
                axios.request({
                    method: "get",
                    url: "/hi",
                });
            }}>get요청</Button>

            <Button onClick={() => {
                axios.request({
                        method: "post",
                        url: "/hi"
                    }
                )
            }}>post요청</Button>
            <hr/>
            {/*html 요소 이용 (a, form)*/}
            {/*get 방식*/}
            <a href="/hi">to hi</a>
            <hr/>
            <form action="/hello" method={"get"}>
                <button>전송</button>
            </form>
            <hr/>
            {/*post*/}
            <form action={"/greeting"} method={"post"}>
                <button>전송</button>
            </form>
        </div>
    )
        ;
}

export default MyApp57;