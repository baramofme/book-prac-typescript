/**
 * @author baramofme
 *
 * void 는 null 과 undefined 의 상위 타입이라 둘 다 할당할 수 있다.
 *
 */

function returnUndefined() : void {}

// void has no value, It means, someVariable has no value(undefined)
let someVariable = returnUndefined();

console.log(typeof someVariable); // undefined

let undefinedVariable = undefined;

// null 할당은 피해야 함. 왜냐면 값(객체)로 인식이 되어 오연산 가능성이 있기 때문
let assignNullforUndefined = null;

// 컴파일 옵션으로 null 과 undefined 가 임의로 할당되는 것을 막는게 좋다.
// "stricNullChecks" : "true"

var testUndefined;
console.log(testUndefined, typeof testUndefined);

var testUndefined2: undefined = undefined;
console.log(testUndefined2, typeof testUndefined2);

var testNull: null = null;
console.log(testNull, typeof testNull); // 타입이 object 로 나와버린다.
// 값이 없는데 object 라면 뭐 어쩔까? 분명하지 않은 케이스이므로 이거 대처하는 코드가 생겨버림.

// undefined 와 null 은 값이 없다는 측면에서 같다.
// 느슨한 같음(==)을 사용하면 공통의 형인 null 로 형변환 된 후 엄격한 비교(===)를 하게 되면.
// 값은 없고 타입이 같으므로 true 가 된다.

// 만약 엄격한 같음(===)를 사용하면 형변환이 안 되므로, 값은 비어있음으로 같지만 타입이 달라 false.