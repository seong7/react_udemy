import React from 'react'; // react feature들을 사용하기 위해 import  
import './Person.css';  // webpack 이 js 파일에 css 파일을 import 가능하게 해줌 (merge 같은 건 없음)
                        // html 파일에 <style></style> 태그를 주입시킴 + browser 별 prefix 도 자동 추가 해줌 ! 

// function person() {
//     return <h2></h2>
// }

// var person = function() {
// }

// ES6 방법 (가장 흔히 사용)
  // lowercase, file name 과 동일한 naming
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click /* event handler 전달 받음 */}>I'm {props.name} and I am {props.age}{/*Math.floor(Math.random() * 30)*/} years old!</p>
      <p>{props.children}</p>{/* Person 요소의 모든 종류의 자식 component 출력 방법 (복잡한 html 또는 react 요소 모두 가능) */}
      <input type="text" onChange={props.changed} value={props.name} />
                        {/* 최초 render 시 name 정해주고 onChange 와 같이 쓰면 변경 가능*/}
                        {/* onChange event 없이 value 만 주면 read-only input 이됨 */}
    </div>
  // class-based component 에서는 this.props 로 사용해야함 
  )
};

export default person;