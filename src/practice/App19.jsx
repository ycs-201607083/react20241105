import React from 'react';

function App19(props) {
    return (
        <div>
            <MyComp title = {"채식주의자"} content = {"비건"} author = {"한강"}/>
            <MyComp title = {"채식주의자"} content = {"비건"}/>
            <MyComp title = {"채식주의자"} author = {"한강"}/>
            <MyComp content = {"비건"} author = {"한강"}/>
        </div>
    );
}

function MyComp({title = "육식주의자", content = "비건사양", author="북한강"}){
    return(
        <div>
            <ul>
                <li>{title}</li>
                <li>{content}</li>
                <li>{author}</li>
            </ul>
        </div>
    );
}

export default App19;