import React from "react";
import {Button} from "../components/ui/button.jsx";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function MyApp80(props) {
    return (
        <div>
            <Button onClick={() => {
                const token = localStorage.getItem("t");
                const decode = jwtDecode(token);
                console.log(decode)
                console.log("id", decode.sub)
                console.log("권한" , decode.scope)
                console.log("유효기간" , decode.exp)
                console.log("발행시간" , decode.iat)
            }}>jwt 디코드</Button>

            <Button onClick={() => {
                axios.get("/api/main9/sub10", {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem("k")}`}
                })
            }}>사용자 정보</Button>
            <Button onClick={() => {
                axios.get("/api/main9/sub7", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
            }}>어드민만 가능</Button>

            <Button onClick={() => {
                axios.get("/api/main9/sub8", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
            }}>매니저만 가능</Button>

            <Button onClick={() => {
                axios.get("/api/main9/sub9", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
            }}>어드민 또는 매니저만 가능</Button>
            <br/>

            <Button onClick={() => {
                axios.get("/api/main9/sub4", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
                    .then(res => {
                        localStorage.setItem("t", res.data)
                    })
            }}>어드민</Button>

            <Button onClick={() => {
                axios.get("/api/main9/sub5", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
                    .then(res => {
                        localStorage.setItem("t", res.data)
                    })
            }}>매니저</Button>

                <Button onClick={() => {
                axios.get("/api/main9/sub6", {
                    headers : {Authorization: `Bearer ${localStorage.getItem("t")}`}
                })
                    .then(res => {
                        localStorage.setItem("t", res.data)
                    })
            }}>어드민 매니저</Button>

            <hr/>

            <Button onClick={() => {
                axios.get("/api/main9/sub1")
                    .then(res => {
                        const token = res.data;
                        console.log(token)
                        localStorage.setItem("t", token)
                    });
            }}>
                jwt 얻기(로그인)
            </Button>
            <Button onClick={() => {
                axios.get("/api/main9/sub2")
            }}>누구나 접근</Button>

            <Button onClick={() => {
                axios.get("/api/main9/sub3", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("t")}`,
                    }
                })
            }}>로그인 유저만 접근</Button>

            <Button onClick={() => {
                localStorage.removeItem("t")
            }}>로그아웃</Button>
        </div>
    );
}

export default MyApp80;