/**
 * @author baramofme
 *
 * 원시(primitive) 내장(built-in) 타입
 *
 */
/*
* 문자열
* */
// 타입스크립트는 쌍따옴표 권장. ESLINT 는 홅따옴포 권장.
let typeString = "문자열 값을 담을 수 있는 문자열 타입";
// 역따옴표로 내장 표현식 사용 가능
let typeStringExpression = `${typeString}을 가지고 표현식을 사용할 수 있다`;
/*
* 숫자
* */
let decimal = 6; // 10 진수
let hex = 0xf00d; // 16 진수
let binary = 0b1010; // 2진수
let octal = 0o744; // 8진수
/*
* 부울
* */
let isShow = true;
let isHidden = false;
/*
* 심볼은
* 고유하고 수정 불가능한 데이터 타입(심볼)을 반환,
* 객체 속성의 식별자로 사용
*
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol
* */
// 내부 인자는 설명이다.
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');
console.log(typeof symbol1);
// 결과: "symbol"
console.log(symbol3.toString());
// 결과: "Symbol(foo)"
// 심볼 내부에 같은 변수를 넣었다고 해도, 리턴된 심볼은 서로 고유하다.
console.log(Symbol('foo') === Symbol('foo'));
// 따라서 : false
/*
* 이넘
* 이름이 붙여진 상수들을 정의한다.
* number 에서 확장된 타입. 첫번째 Enum 요소에 숫자 0 할당,
* 이후에는 초기화 하지 않는 이상 1씩 증가.
*
*  enum 바인딩식별자 = 이넘객체{ 속성: 값 }
*
* https://www.typescriptlang.org/docs/handbook/enums.html
* */
// 1 로 초기화 하면 1 씩 증분
var init1Enum;
(function (init1Enum) {
    init1Enum[init1Enum["Up"] = 1] = "Up";
    init1Enum[init1Enum["Down"] = 2] = "Down";
    init1Enum[init1Enum["Left"] = 3] = "Left";
    init1Enum[init1Enum["Right"] = 4] = "Right";
})(init1Enum || (init1Enum = {}));
// 순서보장 이슈 때문에 for in 대신 of 를 사용했다.
for (let key of Object.keys(init1Enum)) {
    console.log(key); // 1, 2, 3, 4, Up, Down, Left, Right
}
// 미초기화시 0 부터 1 씩 증분
var noInitEnum;
(function (noInitEnum) {
    noInitEnum[noInitEnum["Up"] = 0] = "Up";
    noInitEnum[noInitEnum["Down"] = 1] = "Down";
    noInitEnum[noInitEnum["Left"] = 2] = "Left";
    noInitEnum[noInitEnum["Right"] = 3] = "Right";
})(noInitEnum || (noInitEnum = {}));
// 변수에 이넘 할당도 가능
let noInitEnumVariable = noInitEnum;
for (let key of Object.keys(noInitEnumVariable)) {
    console.log(key); // 0, 1, 2, 3, Up, Down, Left, Right
}
// 문자열 값으로 초기화 할 때는 모두 문자열이어야하고 연산식(계산된 속성)은 넣을 수 없다.
var stringEnum;
(function (stringEnum) {
    stringEnum["Up"] = "UP";
    stringEnum["Down"] = "DOWN";
    stringEnum["Left"] = "LEFT";
    stringEnum["Right"] = "RIGHT";
})(stringEnum || (stringEnum = {}));
for (let key of Object.keys(stringEnum)) {
    console.log(key); // Up, Down, Left, Right
}
let thurs2 = 10 * 40;
// 숫자와 계산된 속성(연산식) 섞기
var enumWeekDay1;
(function (enumWeekDay1) {
    enumWeekDay1[enumWeekDay1["Mon"] = 10] = "Mon";
    enumWeekDay1[enumWeekDay1["Tue"] = 11] = "Tue";
    enumWeekDay1[enumWeekDay1["Web"] = 40] = "Web";
    enumWeekDay1[enumWeekDay1["Tuhur"] = thurs2] = "Tuhur";
})(enumWeekDay1 || (enumWeekDay1 = {}));
for (let key of Object.keys(enumWeekDay1)) {
    console.log(key); //10, 11, 40, Mon, Tue, Web
}
console.log(enumWeekDay1.Tuhur);
// 숫자나 문자열로 표현된 숫자를 넣으면 해당 enum 의 이름에 접근할 수 있다.
console.log(enumWeekDay1[enumWeekDay1.Tuhur]); // Tuhur
console.log(enumWeekDay1[10]); // Mon
console.log(enumWeekDay1["11"]); // Tue
// const(읽기전용) enum 은 속성으로 접근해야함
// for(let key of Object.keys(enumWeekDay2)){
//     console.log(key); //10, 11, 40, Mon, Tue, Web
// }
console.log(1 /* Mon */);
console.log(2 /* "Tue" */);
// 읽기전용 enum 의 멤버는 문자열 리터럴을 통해서만 접근 가능함
// console.log(enumWeekDay2[enumWeekDay2.Tue]);
// 할당 타입 제한
// noInitEnum 모든 속성의 초기값 타입은 이미 숫자로 됨 즉, 숫자밖에 할당 못한다.
let direc1 = 50;
console.log("9.", typeof direc1, direc1);
// 오류
// let direc1: noInitEnum = "hello";
// console.log("9.", typeof direc1, direc1);
// stringEnum  의 모든 속성의 초기값 타입이 문자열이다. 따라서 문자열만 할당 가능
let direc2 = stringEnum.Up;
console.log("10.", typeof direc2, direc2);
let evt = "keyup";
