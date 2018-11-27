/**
 * @author baramofme
 *
 * 기타(etc) 타입
 *
 */

/*
* void
*
* 빈 값을 나타낸다. undefined 나 null 값을 받을 때 사용.
* */

function say(): void {
    alert("hello");
}

let unuable: void = undefined

/*
* null 과 undefined 는 모든 타입의 하위 타입
*
* undefined 는 null 의 하위 타입으로 어떤 빈 값으로도 초기화되지 않는다.
* */

// undefine 타입이 되면 어떤 빈값도 할당할 수 없다.
// let a: undefined = '';
let a: undefined = undefined;

// --strictNullChecks 때문에 유니언 타입으로 null 도 넣을 수 있음을 명시해야 한다.
var b: object | null = { name: "해삐"}
b = null;