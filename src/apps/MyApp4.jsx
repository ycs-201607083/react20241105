import React from 'react';

function MyApp4(props) {
    return (<div>
            <div>hello world app4</div>
            <div>또다른 컴포넌트</div>
            <div className="note">hi</div>
            <div>
                <label htmlFor={"input"}>이름</label>
                <input type={"text"} id={"input"}/>
            </div>
        </div>
    );
}

export default MyApp4;