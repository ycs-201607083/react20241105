//component
//react component : 우리가 만드는 컴포넌트
function MyComponent() {
  //root 태그는 하나만 존재
}

function MyApp2() {
  //build-in component
  //:이미 존재하는 html 요소

  //만든 component : 함수로 만들어짐
  //함수로 만들어짐
  // component 명은 대문자로 시작
  //empty tag는 시작 태그에 꼭 /  작성
  return (
    <div>
      hello
      <br />
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default MyApp2;
