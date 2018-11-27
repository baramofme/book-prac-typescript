/**
 * @author baramofme
 * 동적 타이핑 예시
 * 변수 선인 시가 아니라, 값(혹은 객체) 할당 시 타입이 추론 되어진다.
 *
 * 원시타입(primitive types) - Number, Boolean, String 등
 * 객체타입(object types) - 객체 리터럴, 배열, 내장 객체
 *
 * js 내장 객체
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
/*
* 원시타입(primitive types) - Number, Boolean, String 등
* typeof 검사 시 타입 종류가 구분되어 나온다.
* */
let width = 10; // number
let height = 10.0; // number
let myNick = "happy"; // string
/*
* 객체타입(object types) - 객체 리터럴, 배열, 내장 객체
* typeof 검사 시 타입 종류가 object 로만 나온다.
* */
let animals = ["tiger", "horse", "rhinoceros"]; // 배열
let myFullName = { first: "happy", last: "grammer" }; // 객체 리터럴
// 원시 타입 검사
console.log(typeof width, typeof height);
console.log(typeof myNick);
// 객체 타입 검사
console.log(typeof animals, typeof myFullName); // object 로만 나온다.
console.log(Array.isArray(animals)); // 배열 검사
console.log(typeof myFullName === "object" && !Array.isArray(myFullName) && myFullName !== null); // 배열이 아닌 객체 검사
/*
* Object 의 종류를 구분하고 싶다면?
*
* [[Class]] 내부 속성은 내장 객체를 위해서 정의됐다.
* "Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", and "String".
* [[Class]] 내부 속성은 다른 종류의 객체를 구분하기 위해 내부적으로 사용된다.
* https://stackoverflow.com/a/4320789
* */
//
console.log(Object.prototype.toString.call(animals)); // [object Array]
console.log(Object.prototype.toString.call(myFullName)); // [object Object]
// 타입 검사
if (typeof width === "number" && typeof height === "number") {
    console.log("area : ", width * height);
}
