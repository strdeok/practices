import React from 'react';
// import 문제 from './practices/1';
// import 문제2 from './practices/2';

function App() {
  type 타입 = string | number
  let 이름 :타입 = "deok";
  /** 파라미터에도 타입 지정 가능. 함수 옆에 쓴거는 return값 타입 지정 */
  const 함수 = function 함수(a :number) :number{
    return a*2
  }
  console.log(함수(3))

  type Member1 = [number, boolean]
  let john :Member1 = [123, false]

  type Member2 = {
    name: string,
    age: number
  }

  let deok :Member2 = {
    name: 'deok',
    age: 23
  }

  class User {
    name;
    constructor(name:string){
      this.name = name
    }
  }

console.log(숙제3(700,false,'중'))  
console.log(숙제3(100,false,'상')) 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
