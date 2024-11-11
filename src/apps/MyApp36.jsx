import React, {useState} from 'react';
import {Button} from "../components/ui/button.jsx";
import {Box} from "@chakra-ui/react";

function MyApp36(props) {
    //상태가 변경되면 컴포넌트를 다시 화면에 그림(re rendering)
    let text = "hello";

    /*    //useState : 초기 상태를 결정하고 상태를 저장한 변수와 상태를 변경하는 함수를 리턴함
        const a = useState();
        a[0];   //상태를 저장한 변수
        a[1];   //상태를 변경하는 함수

        const [n1,n2] = a;*/
    let [message, setMessage] = useState("처음 상태")

    function fun1() {
        text = "안녕";
    }

    function fun2() {
        message = "두번째 상태";
    }

    function fun3() {
        //set... 메서드로 상태를 변경해야 함
        setMessage("set함수를 이용한 상태 변경")
    }

    return (
        <div>
            <Button onClick={fun1}>클릭</Button>
            <Button onClick={fun2}>fun2 클릭</Button>
            <Button onClick={fun3}>fun3 클릭</Button>
            <Box w={40} h={20} bg={"blue"}>
                {text}
            </Box>

            <Box w={40} h={20} bg={"red"} color={"white"}>
                {message}
            </Box>
        </div>
    );
}

export default MyApp36;