import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
      // <div>dd</div> jsx expression 은 반드시 한가지 부모 element를 가질 수 있음
    );

    /* 위의 jsx 는 아래 js 코드로 compile 됨 */
       // jsx 가 훨씬 간단함 ( 특히 component tree 가 깊어질 경우 )
    // return React.createElement("div"/* 추가할 element */, {className: "App"} /* configuration (없으면 null) */, /* 추가할 자식 element */ React.createElement("h1", null, "Hi, I\'m a React App!!!"));
  }
}

export default App;
