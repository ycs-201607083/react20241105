import React from 'react';
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
    return (
        <div>
            <Button onClick={() => {
                axios.post("/api/main2/sub7", [
                    {
                        title: "1번책",
                        author: "1번책 작가명",
                        price: 300,
                        content: "1번책 내용",
                        quantity: 3
                    },
                    {
                        title: "2번책",
                        author: "2번책 작가명",
                        price: 3002,
                        content: "2번책 내용",
                        quantity: 2
                    },
                    {
                        title: "5번책",
                        author: "5번책 작가명",
                        price: 3100,
                        content: "5번책 내용",
                        quantity: 5
                    }
                ])
            }}>
                btn7
            </Button>
            <Button
                onClick={() => {
                    axios.post("/api/main2/sub6", [
                        {name: "son", age: 11},
                        {name: "han", age: 22},
                        {name: "faker", age: 33},
                    ]);
                }}
            >
                btn6
            </Button>

            <Button onClick={() => {
                axios.post("/api/main2/sub5",
                    ["coffee", "latte", "mocha"]
                )
            }}>btn5</Button>

            <Button onClick={() => {
                axios.post("/api/main2/sub2", {
                    title:"집에 가자",
                    content: "대충 집에 가는 내용",
                    author:"집에 가고 싶은 사람",
                    price : 3000,
                    quantity:1
                })
            }}>
                btn3
            </Button>

            <Button onClick={() => {
                axios.post("/api/main2/sub4", {
                    id:4,
                    name:"컴퓨터",
                    available:true,
                    shops:["삼성", "애플", "레노버"],
                    attributes:{
                        name:"배고파",
                        value:"점심으로 닭가슴살 먹기 싫어 ㅠ"
                    }
                })
            }}>
                btn123
            </Button>

            <Button onClick={() => {
                axios.post("/api/main2/sub3", {
                    name: "son",
                    age: 99,
                    married: true,
                    item: ["coffee", "pizza", "ham"],
                    team: {
                        name: "토트넘",
                        location: "런던"
                    }
                })
            }}>btn1</Button>
        </div>
    );
}

export default MyApp62;