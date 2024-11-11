import React from 'react';
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
    const p = new URLSearchParams();
    p.append("name", "hankang");    // name=hankang
    p.append("age", 55);                     // name=hankang&age=55
    p.append("city", "서울");               // name=hankang&age=55&city=서울
    p.append("city", "부산");               // name=hankang&age=55&city=서울&city=부산
    p.set("city", "제주")

    const p2 = new URLSearchParams();
    p2.append("email", "gmail")
    p2.append("title", "소년이 온다")
    p2.append("author", "한강")
    return (
        <div>
            <Button onClick={() => {
                //hi로 get 요청
                //email : gmail, title:소년이 온다, author : 한강
                axios.get(`/hi/${p2}`);
            }}>한강</Button>
            <Button onClick={() => {
                axios.get('/hello?&{p}')
            }}></Button>
            <Button onClick={() => {
                axios.get("/hello", {
                    params: p,
                });
            }}></Button>
            {/*hello로 address는 "신촌", city 는 "서울"*/}
            <Button onClick={() => {
                axios.get("/hi", {
                    params: {
                        name: "son",
                        age: 5,
                    }
                });
            }}>btn1</Button>

            <Button onClick={() => {
                axios.get("hello", {
                    params: {
                        address: "신촌",
                        city: "서울",
                    }
                })
            }}>hello.get</Button>
        </div>
    );
}

export default MyApp58;