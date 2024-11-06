import React from "react";

function App6(props) {
    return (
        <div>
            <Comp3/>
            <Comp1/>
            <Comp2/>
            <App66/>
        </div>
    );
}

function Comp1() {
    const a = "hello";
    const b = 3.14;
    const c = ["son", "rose"]
    const d = {name: "son", age: 30}

    console.log("자바스크립트 코드");
    //jsx 내에서 자바스키립트 사용가능
    //{ }를 사용
    return (
        <div>
            Comp1
            {console.log("jsx내의 js코드")}
            <h1>{a}</h1>
            <h1>{b}</h1>
            <h1>{c}</h1>
            <h1>{d.name}</h1>
            <h1>{d.age}</h1>
        </div>
    );
}

function Comp2() {
    const a = "donald";
    const b = 1123.415;
    const c = ["pat", "apt", "tap"]
    const d = {
        name: "rose",
        city: "seoul"
    }
    return(
        <ul>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c[1]}</li>
            <li>{d.name}</li>
            <li>d.city</li>
            <li>c[2]</li>
            <li>c[0]</li>
        </ul>
    )
}

function Comp3(){
    const a = "note";
    const b = 3.14;

    return(
        <div>
            <h1>{a}</h1>
            <h1 className={a}>lorem</h1>
            <input type="text" value={b}/>
            <input type="text" value="9.99"/>
        </div>
    )
}

function App66(){
    const a = "note";
    const b = 3.14;
    const c = {
        name : "rose",
        city:"seoul"
    };

    return(
        <div>
            <h1 className={a}>hello</h1>
            <h3>{a}</h3>
            <input type="number" step={1} value={b} />
            <hr />
            <h3 className={c.city}>{c.name}</h3>
        </div>
    );
}

export default App6;
