/**
 * @author baramofme
 *
 * 내장 타입
 *
 */

/*
* 내장 타입 생성과 사용
*
* 전역 객체를 사용해 값 생성하고 사용하기
* */

let type1 = new Boolean(false);
let type2 = new Number(123);
let type3 = new String("Hello World");

console.log(type1.valueOf())
console.log(type2.valueOf())
console.log(type3.valueOf())

/*
* null 과 undefined 는 모든 타입의 하위 타입
*
* undefined 는 null 의 하위 타입으로 어떤 빈 값으로도 초기화되지 않는다.
* */
