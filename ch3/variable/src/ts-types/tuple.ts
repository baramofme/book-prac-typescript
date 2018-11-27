/**
 * @author baramofme
 *
 * 튜플.
 * 배열은 배열인데, 요소의 타입과 길이가 정해진 배열이다.
 * 배열의 하위타입.
 */

// 요소 길이 2, 각 요소의 타입 지정
let x: [string, number];
// 그것밖에 할당을 못한다.
x = ["tuple", 100];

// 타입 확인
console.log(typeof x, typeof x[0], typeof x[1]);

// 문자열 타입의 변수 호출, 숫자 타입의 변수 호출
console.log(x[0].substr(0, 2), x[1].toFixed(2));

// 길이가 넘어버리면 할당이 안 된다.
// 2.7 미만 버전은 유니온 타입으로 허용됐는데
// 2.7 이후 부터는 길이까지 고정됐다.
let x2: [string, boolean] = ["tuple", true, "tuple2", false];
console.log(x2);