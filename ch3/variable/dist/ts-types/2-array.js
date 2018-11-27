/**
 * @author baramofme
 *
 * 배열 타입과 제너릭 배열
 */
// 배열 타입
let stringArray = [];
stringArray.push("some");
let anyArray = [1, "hi", true];
// union 으로 타입 제한
let unionArray = [1, "hi"];
// 객체(함수) 타입 할당
let unionArrayF = [() => "one", () => "tue"];
// 제너릭 배얼
let stringGenArr = ["a", "b", "c"];
let unionGenArr = ["a", "b", 2];
let typeofGenArr = ["a", "b", 2];
// 객체(함수) 타입 할당
let genArrFunction = [() => "one", () => "two"];
// 선언과 할당 분리
let genArrNumber = new Array();
genArrNumber.push(1);
genArrNumber.push(2);
genArrNumber.push(3);
// 모든 타입 정보는 타입스크립트 컴파일(트랜스파일) 뒤에 제거된다.
