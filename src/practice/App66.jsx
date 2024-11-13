import React, {useState} from 'react';
import {Field} from "../components/ui/field.jsx";
import { NumberInputRoot} from "../components/ui/number-input.jsx";
import {Button} from "../components/ui/button.jsx";
import axios from "axios";
import {Box, Input} from "@chakra-ui/react";
import {DataListItem} from "../components/ui/data-list.jsx";

function App66(props) {
    const [supplierId, setSupplierId] = useState(0)
    const [supplier, setSupplier] = useState(null)
    const handleButtonClick = () => {
        axios.get(`/api/main6/sub2${Id}`)
            .then((res) => setSupplier(res.data))
    };
    return (
        <div>
            <Field label={"공급자 번호 조회"}>
                <NumberInputRoot>
                    <DataListItem label={"ID"} value={supplier.id}/>
                    <DataListItem label={"공급자명"} value={supplier.name}/>
                    <DataListItem label={"계약명"} value={supplier.contact}/>
                    <DataListItem label={"주소"} value={supplier.address}/>
                    <DataListItem label={"도시"} value={supplier.city}/>
                    <DataListItem label={"우편번호"} value={supplier.postalCode}/>
                    <DataListItem label={"국가"} value={supplier.country}/>
                    <DataListItem label={"전화번호"} value={supplier.phone}/>
                </NumberInputRoot>
            </Field>
            <Button onClick={handleButtonClick}
            >공급자 조회</Button>
            <hr/>
            <SupplierView supplier={supplier}/>
        </div>
    );
}

function SupplierView({supplier}) {
    if (!supplier) {
        return (
            <Box>
                <p>조회된 공급자가 없습니다.</p>
            </Box>
        );
    }

    return (
        <Box>
            <Field label={"ID"} readOnly>
                <Input value={supplier.id}/>
            </Field>

            <Field label={"이름"} readOnly>
                <Input value={supplier.name}/>
            </Field>

            <Field label={"계약명"} readOnly>
                <Input value={supplier.contact}/>
            </Field>

            <Field label={"주소"} readOnly>
                <Input value={supplier.address}/>
            </Field>

            <Field label={"도시"} readOnly>
                <Input value={supplier.city}/>
            </Field>

            <Field label={"우편번호"} readOnly>
                <Input value={supplier.postalCode}/>
            </Field>

            <Field label={"국가"} readOnly>
                <Input value={supplier.country}/>
            </Field>

            <Field label={"휴대폰 번호"} readOnly>
                <Input value={supplier.phone}/>
            </Field>
        </Box>
    );
}

export default App66;