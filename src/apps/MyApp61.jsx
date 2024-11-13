import React from "react";
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp61(props) {
    return (
        <div>
            <Button onClick={() => {
                axios.post("/api/main1/sub8", [
                    {product: {name: "computer", price: 1000}, company: "samsung"},
                    {product: {name: "smart Phone", price: 500}, company: "apple",},
                    {product: {name: "그래픽 카드 ", price: 2000}, company: "nvidia",},
                ])
            }}>가격 출력</Button>

            <Button
                onClick={() =>
                    axios.post("/api/main1/sub8", [
                        {name: "kim", team: "texas", age: 23},
                        {name: "son", team: "london", age: 24},
                        {name: "han", team: "kang", age: 25},
                    ])
                }
            >
                btn4
            </Button>
            <Button
                onClick={() =>
                    axios.post("/api/main1/sub7", ["coffee", "cola", "milk"])
                }
            >
                btn3
            </Button>
            <Button
                onClick={() => {
                    axios.post("/api/main1/sub6", {
                        name: "kim",
                        married: true,
                        kids: null,
                        items: ["car", "house", "bitcoin"],
                        team: {
                            name: "토트넘",
                            location: "런던",
                        },
                    });
                }}
            >
                btn2
            </Button>
            <hr/>
            <Button
                onClick={() => {
                    axios.post("/api/main1/sub5", {
                        name: "son",
                        age: 33,
                    });
                }}
            >
                btn1
            </Button>
        </div>
    );
}

export default MyApp61;