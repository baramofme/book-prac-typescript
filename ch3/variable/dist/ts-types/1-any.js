/**
 * @author baramofme
 *
 * Any
 *
 * 모든 타입의 최상위 타입으로, 타입 다형성에 의해 모든 하위 타입의 값을 할당할 수 있다.
 */
let basket = 10;
basket = true;
basket = "banana";
console.log(basket);
let vList = [1, false, "happy"];
console.log(vList[0]);
let number = 50;
console.log(typeof number, number.toFixed(1));
// number 타입을 통해 오면 안 되는 메소드 호출했으므로 오류 출력
// console.log(typeof number, number.customMethod(1));
let number3 = 50;
console.log(typeof number3, number3.toFixed(1));
// 없는 메소드를 호출해도,
// 제한이 없는 타입인 Any 가 타입이므로, 모든 메소드를 허용해서 아무 오류도 안 남.
console.log(typeof number3, number3.customMethod(1));
let number4 = "happy";
console.log(typeof number4, number4.charAt(0));
let number2 = 50;
console.log(typeof number2);
// Object 타입은 모든 타입을 받을 수 있지만.
// 모든 타입의 상위 타입은 아니기 때문에 타입 정보가 없다.
// 그저 속성만 사용할 수 있다.
// console.log(number2.toFixed(1));
// tsconfig.json 에서
// --noImplicitAny 를 true 로 주면, Any 타입을 생략할 수 없고, 명시적으로 적어주어야 한다.
