import React from 'react'; // react feature들을 사용하기 위해 import  

// function person() {
//     return <h2></h2>
// }

// var person = function() {
// }

// ES6 방법 (가장 흔히 사용)
  // lowercase, file name 과 동일한 naming
const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age}{/*Math.floor(Math.random() * 30)*/} years old!</p>
      <p>{props.children}</p>{/* Person 요소의 모든 종류의 자식 component 출력 방법 (복잡한 html 또는 react 요소 모두 가능) */}
    </div>
  // class-based component 에서는 this.props 로 사용해야함 
  )
};

export default person;