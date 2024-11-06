import React from 'react';

function App18(props) {
    return (
        <div>
            <Comp
                product={{name: "pizza", price: 3000}}
                title="소년이온다"
                content="518"
                author="한강"
            />
        </div>
    );
}

function Comp({ product, title, content, author }) {
    return (
        <div>
            <h3>comp</h3>
            <li>이름 : {product.name}</li>
            <li> 가격 : {product.price}</li>
            <li> 제목: {title}</li>
            <li>내용 : {content}</li>
            <li>저자 : {author}</li>
        </div>
    );
}

// function Comp({product, title, content, author}) {
//     return
//     (
//         <div>
//             <h3>comp</h3>
//             <li>이름 : {product.name}</li>
//             <li>가격 : {product.price}</li>
//             <li>책 제목 : {title}</li>
//             <li>책 내용 : {content}</li>
//             <li>책 작가 : {author}</li>
//         </div>
//     );
// }

export default App18;