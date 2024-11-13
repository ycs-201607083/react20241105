import React, {useState} from 'react';
import axios from "axios";

function App69(props) {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(undefined)
    const handleClick = () => {
        axios.postForm("/api/main8/sub2", {
            title : title,
            attached : file
        })
    }
    return (
        <div>
            <input
                type={"text"}
                value={title}
                placeholder={"제목 입력"}
                onChange={(e) => setTitle(e.target.value)}/>
            <br/>
            <input
                type={"file"}
            onChange={(e) => setFile(e.target.files[0])}/>
            <br/>
            <button onClick={handleClick}>전송</button>
        </div>
    );
}

export default App69;