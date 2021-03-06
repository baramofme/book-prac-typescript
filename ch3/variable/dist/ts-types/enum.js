/**
 * @author happygrammer
 */
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Mon"] = 0] = "Mon";
    WeekDay[WeekDay["Tue"] = 1] = "Tue";
    WeekDay[WeekDay["Wed"] = 2] = "Wed";
    WeekDay[WeekDay["Thu"] = 3] = "Thu";
})(WeekDay || (WeekDay = {}));
let thu2 = 10 * 2;
var WeekDay2;
(function (WeekDay2) {
    WeekDay2[WeekDay2["Mon"] = 10] = "Mon";
    WeekDay2[WeekDay2["Tue"] = 11] = "Tue";
    WeekDay2[WeekDay2["Wed"] = 40] = "Wed";
    WeekDay2[WeekDay2["Thu"] = thu2] = "Thu";
})(WeekDay2 || (WeekDay2 = {}));
var WeekDay3;
(function (WeekDay3) {
    WeekDay3["Mon"] = "Monday";
    WeekDay3["Tue"] = "Tuesday";
})(WeekDay3 || (WeekDay3 = {}));
console.log("1. " + JSON.stringify(WeekDay));
console.log("2. " + JSON.stringify(WeekDay2));
console.log("3. " + JSON.stringify(WeekDay3));
console.log(`4. Mon=${WeekDay.Mon}, Tue=${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`);
console.log(`5. 0=${WeekDay[0]} 1=${WeekDay["1"]} 3=${WeekDay[WeekDay.Wed]}`);
console.log("6.", typeof WeekDay);
console.log("7.", typeof WeekDay.Mon, typeof WeekDay3.Mon);
console.log("8.", typeof WeekDay[0], WeekDay[0]);
// WeekDay 모든 속성의 초기값 타입은 이미 숫자로 됨 즉, 숫자밖에 할당 못한다.
let myDay1 = 50;
console.log("9.", typeof myDay1, myDay1);
// let myDay2: WeekDay = "hello";
// console.log("9.", typeof myDay2, myDay2);
// WeekDay3 의 모든 속성의 초기값 타입이 문자열이다. 따라서 문자열만 할당 가능
let myDay2 = WeekDay3.Mon;
console.log("10.", typeof myDay2, myDay2);
