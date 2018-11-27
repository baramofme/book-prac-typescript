/**
 * @author baramofme
 *
 * 기타(etc) 타입
 *
 */

/*
* 인터섹션
*
* 두 타입을 합쳐 하나로 만들 수 있는 타입
* */

interface Cat { leg: number;}
interface Bird { wing: number;}
// 두 타입의 모든 속성을 가져야 한다.
let birdCat: Cat & Bird = { leg:4, wing:2}

/*
* 유니언
*
* 2개 이상의 타입을 하나의 타입으로 정의한 타입
* */

// 두 타입 중 하나의 속성만 가져도 된다.
let birdOrCat: Cat | Bird  = { leg: 4}
let uniStringNumber : string | number;