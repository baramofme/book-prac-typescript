/**
 * @author baram924
 * js 타입
 */

/*
* 점진적 타입 검사
*
* 정적 - 컴파일 시 타입 검사
* 동적 - 런타임 후 타입 검사
* 점진적 - 컴파일 때 타입 검사 + 필요에 따라 타입 선언 생략(Any 타입으로의 암시적 형변환) 지원
*
* */

let myBoolean = true;             // boolean 타입
let myNumber = 10;                // number 타입
let myString = "hello";           // string 타입
let myUndefined;                  // undefined 타입
let myNull = null;                // null 타입(객체 타입이 비어있다면)
let myObject = { name: "happy" }; // 객체 타입(객체 리터럴)
let myObject2 = [1, 2, 3];        // 객체 타입(배열)
let myFunction = function (a) { return a; }; // 함수 타입

/*
* 동치 비교 및 동일성
*
* == : 두 값이 같은지 비교,
*      공통형으로 변환 후 최종 같음 비교를 === 으로 수행  A == B 는 B == A
* === : 두 값과 타입까지 같은 지 비교.
*       암묵적 형변환 하지 않고 두 값이 같은 지 비교
*
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness
* */

/*
*
* 각 언여별 타입 계층도 모아놓은 깃헙 저장소
*
* https://github.com/bcherny/language-types-comparison
* */

console.log("boolean : " + typeof myBoolean);
console.log("number : " + typeof myNumber);
console.log("string : " + typeof myString);
console.log("undefined : " + typeof myUndefined);

console.log("null : " + typeof myNull, myNull === null); // null: object true
console.log("object : " + typeof myObject, typeof myObject2); // object : object
console.log("function : " + typeof myFunction); // function : function

/*
* null 은 비어있거나, 참조가 존재하지 않는 할당 가능한 원시 값이다. object 라고 표시는 되며 타입으로 취급한다.
* undefined 는 선언은 됐지만 할당은 안됐다는 원시 값이다. 역시 object 라고 표시가 되며 타입으로 취급한다.
* */

// 느슨한 같음(==)는 null 과 undefined 를 공통 타입인 object 로 형변환해서 비교한다.
console.log("undefined == null : " + (undefined == null));

// 엄격한 같음(===)은 형변환 없이 현재 값과 타입을 비교하므로 다른 타입이기에 false 가 된다.
console.log("undefined === null : " + (undefined === null));

// 둘다 object 지만 내부적으로는 다른 타입임을 볼 수 있다.
console.log(Object.prototype.toString.call( undefined));
console.log(Object.prototype.toString.call( null ));

/*
let myBoolean: boolean = true;
let myNumber: number = 10;
let myString: string = "hello";
let myUndefined: undefined;
let myNull: null = null;
let myObject: { name: string } = { name: "happy" };
let myObject2: number[] = [1, 2, 3];
let myFunction: (a: number) => number = function (a) { return a; };
*/
/*
let myNullType: null = null;
let myNullType2: number = null;
*/
/*
let myNull2 = {}; // null 값
let myNull3 = []; // null 값
let myNull4 = 0; // null 값
let myNull5 = ""; // null 값
*/
/*
let myBool = true; // boolean 타입
let myNum = 10; // number 타입
let myString = "hello"; // string 타입
let myNull: null = null; // null 타입
let myUndefined: undefined = undefined; // undefined;
let myObject: object = { a: 1, b: 2 };
let myFunction: object = (a) => { return a; };
let myFunction: object = (a) => { return a; };*/