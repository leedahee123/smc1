// PASSWORD를 맞추는 프로그램을 개발한다.

// 1. PASSWORD를 미리 지정한다. (CONST 사용 추천)
// 2. promt로 PASSWORD를 받는다.
// 3-1. 만약 맞았다면 "성공" 출력
// 3-2. 만약 틀렸다면 "실패" 출력

"use strict";

const ID ="leedaee123";
const PASSWORD ="qwerty123";

let id = prompt('아이디');
let password = prompt('비밀 번호');

if(id===ID && password===PASSWORD) {
    alert("로그인이 되었습니다.");
}
else{
    alert("실패");
}
