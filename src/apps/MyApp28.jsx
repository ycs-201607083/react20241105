import React from 'react';
import { Input } from "@chakra-ui/react"

function MyApp28(props) {
    return (
        <div>
            <input type={"text"} placeholder={"이메일 입력"}/>
            <hr/>
            <Input variant={"subtle"} placeholder={"이메일 입력"}/>
            <Input variant={"flushed"} placeholder={"이메일 입력"}/>
            <Input variant={"outline"} placeholder={"이메일 입력"}/>
        </div>
    );
}

export default MyApp28;