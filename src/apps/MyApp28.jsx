import React from 'react';
import {Icon, Input} from "@chakra-ui/react"
import {Checkbox} from "../components/ui/checkbox.jsx";
import {Radio, RadioGroup} from "../components/ui/radio.jsx";
import {Switch} from "../components/ui/switch.jsx";
import {HiCheck} from "react-icons/hi2";
import {HiX} from "react-icons/hi";
import {RadioCardItem, RadioCardLabel, RadioCardRoot} from "../components/ui/radio-card.jsx";
import {SiSamsungpay} from "react-icons/si";
import {FaApplePay} from "react-icons/fa";
import {RiKakaoTalkLine} from "react-icons/ri";

function MyApp28(props) {
    return (
        <div style={{margin: "10px"}}>
            <h5>icons</h5>
            <FaApplePay/>
            <SiSamsungpay/>
            <RiKakaoTalkLine/>
            <span style={{fontSize: "10em", color: "green"}}><RiKakaoTalkLine/></span>
            <RadioCardRoot indicator={null}>
                <RadioCardLabel>결제수단</RadioCardLabel>

                <RadioCardItem
                    icon={
                        <Icon fontSize="5xl">
                            <FaApplePay/>
                        </Icon>
                    }
                    indicator={null}
                    value={1}
                    label="Apple Pay"
                    />
                <RadioCardItem
                    icon={
                        <Icon fontSize="2xl">
                            <FaApplePay/>
                        </Icon>
                    }
                    indicator={false}
                    value={1}
                    label="Apple Pay"
                />
                <RadioCardItem indicator={null} value={3} label="kakao pay"/>

            </RadioCardRoot>

            <Switch size="lg" thumbLabel={{on: <HiCheck/>, off: <HiX/>}}/>
            <h5>radio button</h5>
            <RadioGroup>
                <Radio value={1}>option1</Radio>
                <Radio value={2}>option2</Radio>
                <Radio value={3}>option3</Radio>
            </RadioGroup>
            <h5>checkBox</h5>
            <input type={"checkbox"} id={"check1"}/>
            <Checkbox variant="solid">동의</Checkbox>
            <Checkbox variant="subtle">동의</Checkbox>
            <hr/>
            <input type={"checkbox"} id="check1"/>
            <label htmlFor={"check1"}>동의</label>
            <hr/>
            <input type={"text"} placeholder={"이메일 입력"}/>

            <hr/>
            <Input variant={"subtle"} placeholder={"이메일 입력"}/>
            <Input variant={"flushed"} placeholder={"이메일 입력"}/>
            <Input variant={"outline"} placeholder={"이메일 입력"}/>
        </div>
    );
}

export default MyApp28;