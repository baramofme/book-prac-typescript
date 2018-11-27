/**
 * @author baramofme
 * 호이스팅 예시
 */

// 변수 초기화(값 할당 안됨)가 안 되어도 참조가 가능해 버려서 undefined 가 나온다.
console.log(myName); // undefined

// var 로 선언도 안 해줬는데 할당이 가능하다.
myName = 'hoisting assign string';

console.log(myName);

// 아래쪽에서 선언해도 위에서 막 접근이 가능해버림.
var myName = "Ji";
{
    var myName = "Woo";
    {
        var myName = 'Koool';
    }
}

console.log(myName);
