import React from 'react';
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
    return (
        <div>
            <Button onClick={() => {
                axios.get("/api/main7/sub12")
                    .then((res) => res.data)
                    .then((data) => console.log(data))
                    //200번(연결 성공)이 아니면 catch로 받은 함수 실행
                    .catch((error)=> {
                        console.log("200번대 아님")
                        console.log(error)
                        console.log(error.response.status)  //상태보기
                        console.log(error.response.data)  //상태보기
                        console.log(error.response.data.name)  //응답본문 속성

                    });

            }}>405응답</Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub11");
            }}>sub9/403error</Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub110");
            }}>sub9/202error</Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub9");
            }}>sub9/405error</Button>

            <Button
                onClick={() => {
                    axios.get("/api/main7/sub8");
                }}>no content</Button>

            <Button
                onClick={() => {
                    axios.get("/api/main7/sub7");
                }}>not found</Button>

            <Button
                onClick={() => {
                    axios.get("/api/main7/sub6");
                }}>ok</Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub5")
            }}>
                sub5/server error
            </Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub4")
            }}>
                sub4/404not
            </Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub3")
            }}>
                sub3/200ok
            </Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub2")
            }}>
                sub2/404not
            </Button>

            <Button onClick={() => {
                axios.get("/api/main7/sub1")
            }}>sub1/200ok</Button>
        </div>
    );
}

export default MyApp68;