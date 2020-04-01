
// import logo from './logo.svg';
import './App.css'; // webpack 이 js 파일에 css 파일을 import 가능하게 해줌 (merge 같은 건 없음)
import Person from './Person/Person';
// component 이름의 첫 문자 uppercase 로 naming
// (lowercase component 는 HTML 요소에 사용되어 구분시킴)


/**********************************/
/* Class-based Component 사용 시  */
import React, { Component } from 'react'; // Class-based Componenet 에서 extends 하여 사용
/**********************************/

/**********************************/
/* Functional Component 사용 시  */
// import React, { useState } from 'react'; // Functional Compoenent 에서 사용하는 Hook import (use.. 으로 이름지어져 있음)
/**********************************/


/***********************************************************************************/
/* Class-based Component 생성 법 (기존 방식의 state 변경 방식 - this.setState 사용) */
/*********************************************************************************/
// import React, { Component } from 'react'; // Class-based Componenet 에서 extends 하여 사용

class App extends Component {
  state = {
    persons: [
      { name : "Max", age : 28},
      { name : "Manu", age : 29},
      { name: "Seongjin", age : 28}
    ],
    otherState: "some other value",
    showPersons: false
  }
  // state : 
  // Component 상속하는 class-based component 내에서만 사용할 수 있는 내장 객체
  // 하지만, React 16.8 부터는 function component 에서도 사용 가능해짐 ***
  // 다른 property 를 선언할 수도 있지만, state 는 특별한 기능 가짐 
  // state 의 기능 : state 내 property 의 값이 바뀌면 해당 property 값을 사용하는 html 요소를 자동 re-render 함 
  //                 그리고 state 내에 변화된 부분과 안된부분을 자동으로 merge 시킴 (__ hook 과 차이점)
  
  // method 로 event handler 선언
  switchNameHandler = (newName) => {
    // console.log("Was clicked!"); __ click event 에 handler 로 달아주어 실행
    // console.log(this); // App 객체 출력
    

    /* State 변경하는 법 */
    //   DON'T DO  : this.state.persons[0].name = "Jason";  __ (React 에서 변화 인식하지 못함!! ==> re-render 동작하지 않음)
    // setState 사용할 것 !! Component object 의 method 임 (Component 객체는 React library 에 의해 추가됨)
    // 매개변수로 변경된 객체 넣어줌
    this.setState( {
      persons: [
        { name : "Jason", age : 28},
        { name : newName, age : 29},
        { name: "Seongjin Kim", age : 28}
      ]
    } )
    // 원래 state 에 있는 property 들 중 수정된 부분만 인식하여 기존 state 와 merge 시킴 
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name : "Max", age : 28},
        { name : event.target.value /* event 객체로부터 input 의 value 받아옴 */, age : 29},
        { name: "Seongjin", age : 28}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    // React 는 변경된 shoPersons 와 변경되지 않은 state 의 property 들을 merge 시킴
    // merge 후 변경된 사항 render 
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* 
          event 주는 방법 
            1. bind 로 기존 method borrowing (선호)
                - render 된 상태에서는 dom 요소 자체가 객체이므로 App class 의 instance 의 메소드를 borrowing 해야지 쓸 수 있음.
                - eventHandler.bind(this, "handler의 매개변수") 형식으로 this (App 객체) 를 주므로 method 내에서 this 를 올바르게 사용 가능
            2. arrow function 의 실행문에 method 사용 (비효율적일 수 있으므로 지양)
                - render 된 상태에서 dom 요소 (객체) 자체의 function 으로 사용하므로
        */}
        <button 
          style={style /* inline style 을 넣어주는 jsx 문법 __ 약간의 제약이 있음 (hover 같은 것 완벽히 구현 힘듬) */}
          onClick={this.switchNameHandler.bind(this, "Maximillian") /* ! this. 사용 & () 붙이지 않음*/}>Switch Name</button>
        {/* 2번 방법(지양) : onClick = { () => this.switchNameHandler() } */}

        {/* hard coding 방법 __ re-render 불가능 */}
        <Person name="Max" age="28"/> {/*또는 <Person></Person>*/}
        <Person name="Manu" age="29">My Hobbies : Cooking {/* {props.children} 으로 전달됨 */}</Person>
        <Person name="Seongjin" age="28"/>
        
        {/* state 객체를 이용하는 방법 */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={/*this.switchNameHandler.bind(this, "Max!")*/
                  () => this.switchNameHandler("bind 없이 성공 !")
                    /* event handler 인 fn 을 "props.click" 으로 전달 */}
          changed={ ()=>{  this.nameChangedHandler }    /* props.changed __ event handler 전달 */}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

        {/*  */}
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle</button>
        { 
          this.state.showPersons 
            ? <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, "Max!")  /* event handler 인 fn 을 "props.click" 으로 전달 */}
                  changed={this.nameChangedHandler /* props.changed __ event handler 전달 */}/>
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
              </div> 
              /* 위 컴포넌트가 생성될 때는 React.createElement() 가 실행됨 */
            : null
        }
      </div>
      // <div>dd</div> jsx expression 은 반드시 한가지 부모 element를 가질 수 있음
      );
    
      /* 위의 jsx 는 아래 js 코드로 compile 됨 */
      // jsx 가 훨씬 간단함 ( 특히 component tree 가 깊어질 경우 )
      // return React.createElement("div"/* 추가할 element */, {className: "App"} /* configuration (없으면 null) */, /* 추가할 자식 element */ React.createElement("h1", null, "Hi, I\'m a React App!!!"));
  }
}
export default App;





/******************************************************************************************/
/* Functional Component (React 16.8 버전 이상의 새로운 방식의 state 변경 방식 - hook 사용) */
/****************************************************************************************/

// import React, { useState } from 'react'; // Functional Compoenent 에서 Hook 으로 사용

// const app = (props) => {
//   const [ personsState, setPersonsState ] = useState({  
//     //                          ** useState() 는 두 요소를 가진 array return 함 => destructuring 하여 각 요소 사용
//     //                              요소 1 : current state
//     //                                (class-based component 의 this.state 와 같음)
//     //                              요소 2 : state 변경에 사용하는 function 
//     //                                (class-based component 의 this.setState 와 같음)
//     persons: [
//       { name : "Max", age : 28},
//       { name : "Manu", age : 29},
//       { name: "Seongjin", age : 28}
//     ],
//     // otherState: "some other value"  (property 별로 각각의 hook 을 생성해줌)
//   });

//   console.log(personsState);  // switchNameHandler -> setPersonsState 로 state 변경 했을 때 Class-based Component 와 가장 중요한 차이점 발생
//                               // => state 객체 내 변경되지 않은 property 를 포함시키지 않는다. -> 각각의 property 별로 Hook 을 따로 만들어 준다.

//   // 다른 property 를 위한 hook 생성
//   const [otherState, setOtherState] = useState("some other value");

//   console.log(personsState, otherState); //__ personsState 와 otherState 모두 출력

//   const switchNameHandler = () => {

//     /* useState 의 현재 state 객체를 변경하는 법 */
//     // 위에서 선언한 setpersonsState function 활용함 
//     setPersonsState( {
//       persons: [
//         { name : "Jason", age : 28},
//         { name : "Manu", age : 29},
//         { name: "Seongjin Kim", age : 28}
//       ]
//     } )
//     // 원래 state 에 있는 property 들 중 수정된 부분만 인식하여 기존 state 와 merge 시킴 
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <button onClick={switchNameHandler /* ! function 이므로 this. 사용하지 않음 & () 붙이지 않음*/}>Switch Name</button>

//       {/* useState 의 현재 state 인 객체를 이용하는 방법 */}
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}/>
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age}/>
//         {/* click={personsState.click/>*/}
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}/>
//     </div>
//     // <div>dd</div> jsx expression 은 반드시 한가지 부모 element를 가질 수 있음
//   );
// }
// export default app;

