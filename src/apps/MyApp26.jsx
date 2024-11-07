import React from 'react';
import {Button} from "../components/ui/button.jsx";

function MyApp26(props) {
    return (
        <div>
            <Button size="xs">Click</Button>
            <Button size="sm">Click</Button>
            <Button size="md">Click</Button>
            <Button size="lg">Click</Button>
            <Button size="xs">Click</Button>

            <hr/>
            <Button variant="">click</Button>
            <Button variant="">click</Button>
            <Button variant="">click</Button>
            <Button variant="">click</Button>
            <Button variant="">click</Button>
            <hr/>
            <Button loading>click</Button>
            <Button loading={true}>click</Button>
            <Button>click</Button>
            <Button loading={false}>click</Button>
            <hr/>
            <Button loading loadingText="업로드중">click</Button>
            <Button loading={true} loadingText="작업중"></Button>
        </div>
    );
}

export default MyApp26;