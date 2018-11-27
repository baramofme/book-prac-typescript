/**
 * @author baramofme
 * 함수레벨 스콥 적용 예시
 * 블록레벨 스콥 미적용 예시
 */

// 블록 {} 단위를 격리된 공간(scope) 로 인식하지 못한다.
var myName = "Ji";
{
    var myName = "Woo";
    {
        var myName = 'Koool'
    }
}
console.log(myName); // Koool


// 함수 단위의 영역 내부는 별도의 공간으로 인식한다.
function levelScope(){
    var myName = 'levelScope'
}

// 함수 레벨 스콥에서 벌어진 일이 전역에 영향을 미치지 못한다.
console.log(myName); // Koool
