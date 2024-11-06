import React from 'react';

function MyApp9(props) {
    const a = ["son ", "rose", "bruno"];
    const b = [<li>son</li>, <li>rose</li>, <li>bruno</li>]
    const c = a.map((e) => <li>{e}</li>)
    return (
        <div>
            {a.map(n => (
                    <li>{n}</li>
                )
            )}
            <hr/>
            {b}
            <div>
                <hr/>
                {c}
            </div>
        </div>
    );
}

export default MyApp9;