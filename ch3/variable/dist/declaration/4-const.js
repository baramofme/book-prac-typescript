/**
 * @author baramofme
 */
// 호이스팅 방지로 역시나 undefined 가 아닌
// is not defined  오류 출력됨
// console.log(birthMonth)
const birthMonth = 9;
// const는 블록 스코프가 적용됨
if (true) {
    const birthMonth = 12;
}
console.log(birthMonth);
const profile = {
    name: "쿠울",
    month: birthMonth,
};
// profile 변수에 자체에 재할당은 불가능함
// const profile = "happy";
// 할당된 객체의 속성에 대한 할당은 가능함
profile.name = "happy2";
profile.month--;
console.log(profile);
console.log('Class: , Function: , Line 30 (): ', typeof birthMonth);
