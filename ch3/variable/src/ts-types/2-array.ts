/**
 * @author baramofme
 *
 * 배열 타입과 제너릭 배열
 */


// 배열 타입
let stringArray : string[] = [];
stringArray.push("some");

let anyArray: any[] = [1,"hi", true];
// union 으로 타입 제한
let unionArray: (number | string)[] = [1,"hi"];
// 객체(함수) 타입 할당
let unionArrayF: (()=> string)[] = [()=> "one", ()=> "tue"];

// 제너릭 배얼
let stringGenArr : Array<string> = ["a", "b", "c"];
let unionGenArr : Array<string | number> = ["a", "b", 2];
let typeofGenArr : typeof unionGenArr = ["a", "b", 2];

// 객체(함수) 타입 할당
let genArrFunction : Array<() => string> = [()=> "one", ()=> "two"];

// 선언과 할당 분리
let genArrNumber: Array<number> = new Array<number>();
genArrNumber.push(1);
genArrNumber.push(2);
genArrNumber.push(3);


// 모든 타입 정보는 타입스크립트 컴파일(트랜스파일) 뒤에 제거된다.


