import React from 'react';

function App22(props) {
    return (
        <div>
            <Comp1>
                <h3>
                    Lorem ipsum dolor sit amet
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                    distinctio dolor, dolorum, est excepturi iusto laudantium magnam minus modi molestias officiis omnis
                    pariatur quaerat, quos recusandae repudiandae suscipit! Distinctio, obcaecati.
                </p>
            </Comp1>
            <hr/>
            <Comp2>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor2.</li>
                <li>Lorem ipsum dolor3.</li>
            </Comp2>
        </div>
    );
}

//comp1 만들기 app22에서 넘겨준 children 두번 출력
function Comp1({children}){
    return(
        <div>
            {children}
            {children}
        </div>
    );
}
function Comp2({children}){
    return
    (
      <div>
          <h1>com2</h1>
          {children}
      </div>
    );
}

export default App22;