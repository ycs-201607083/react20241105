import React from 'react';

function MyApp17(props) {
    return (
        <div>
            <Comp name="hello"
                  age={3.14}
                  foods={["pizza", "burger"]}
                  info={function () {
                      console.log("프랍으로 넘긴 함수")
                  }}
                  desc={() => {
                      console.log("프랍으로 넘긴 애로우 함수")
                  }}
            />
        </div>
    );
}

function Comp(props) {
    console.log(props.name)
    console.log(props.age)
    console.log(props.foods)
    console.log(props.info)
}

export default MyApp17;