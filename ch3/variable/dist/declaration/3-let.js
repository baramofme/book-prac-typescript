/**
 * @author baramofme
 */
// 호이스팅이 지원되지 않기 때문에 undefined 가 아닌,
// myName2 is not defined. 즉, 아예 선언도 안 됐다고 오류 표시.
// console.log(myName2)
let myName2 = "cool";
// 블록 레벨 스콥 지원으로
if (true) {
    // 내부 스콥에서 변수를 선언하고
    let myName2;
    // 할당 하더라도
    myName2 = "not cool";
}
// 함수 레벨 스콥은
function levelScope2() {
    let myName2;
    myName2 = "not cool";
}
// 전역 스콥에 정의된 변수에 영향을 미치지 않음
console.log(myName2); // cool
