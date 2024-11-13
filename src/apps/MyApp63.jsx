import React from 'react';
import {Button} from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
    const api = "/api/main3/"
    return (
        <div>
            <Button onClick={() => axios.delete(api +"sub8", {
                data : {
                    id : 1,
                    name : "집보냊어ㅓ어어어"
                }
            })}>delete3</Button>

            <Button onClick={() => axios.put(api +"sub7", {
            putData : {
                title : "집에 가고싶고",
                value : 5
            }
            })}>put2</Button>

            <Button onClick={() => axios.delete(api + "sub6", {
                data : {
                    id : 5,
                    name : "kim"
                }
            })}>
                delete2
            </Button>

            <Button onClick={() => axios.delete(api + "sub5")}>
                delete1
            </Button>

            <Button onClick={() => axios.put(api + "sub4",{
                title :"제목",
                author :"한강"
            })}>
                put2
            </Button>

            <Button onClick={() => axios.put(api + "sub3")}>
                put1
            </Button>

            <Button onClick={() => axios.post(api + "sub2",{
                name : "son",
                age:99
            })}>
                post1
            </Button>

            <Button onClick={() =>
                axios.get("/api/main3/sub1")}>get1</Button>
        </div>
    );
}

export default MyApp63;