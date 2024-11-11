import React from 'react';
import { Input} from "@chakra-ui/react";
import {Button} from "../components/ui/button.jsx";

function App33(props) {
    const m = function (){
        console.log("버튼 클릭")
    }

    return (
        <div>
            {/*input 에 keyup 이벤트 발생 시 로그로 메시지 출력*/}
            <Input onkeyUp={() => console.log("키업 이벤트 발생")}/>
            <input type={"text"} onKeyUp={(e) =>
                console.log(e)}/>
            <hr/>
            {/*버튼이 클릭되면 로그로 메시지 출력*/}
            <Button onClick={m}>클릭</Button>
            <hr/>
            {/*textarea에 mouseEnter, mouseLeave  이벤트 발생 시 메시지 출력*/}
            <textarea
                onMouseEnter={() => console.log("마우스 들어옴")}
                onMouseLeave={() => console.log("마우스 떠나감")}>
            </textarea>
        </div>
    );
}

export default App33;