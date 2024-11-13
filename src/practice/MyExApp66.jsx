import React from 'react';
import {Field} from "../components/ui/field.jsx";
import {NumberInputRoot} from "../components/ui/number-input.jsx";

function MyExApp66(props) {
    return (
        <div>
            <Field label={"고객번호"}>
                <NumberInputRoot
                value={customer}>
                </NumberInputRoot>
            </Field>
        </div>
    );
}

export default MyExApp66;