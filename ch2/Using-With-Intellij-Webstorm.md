## Intellij(webstorm)

책에서 나오는 vscode 의 task 기능이 intellij(webstorm)의 run 기능 같은데. 기본으로 command line interface 를 이용한 명령을 제공하지 않는다.

npm 같이 프레임워크나 특정 도구에 맞춰진 것들이 있는데, 타입스크립트는 따로 없다.

하지만 타입스크립트 윈도우에서 수동으로 관련 설정을 변경하며 컴파일을 할 수는 있다.

- https://www.jetbrains.com/help/webstorm/typescript-support.html
- https://www.jetbrains.com/help/idea/settings-languages-typescript.html
- keymap 으로 컴파일 단축키 지정 가능.

### 기본

#### 기본 설정

![](.README_images\set-basic.png)

- 번들 말고 버전 선택하는건 보통 `node_modules` 내부 설치된 거로 
- `~Service` 는 반드시 체크 되어야 작동
- Options 는 TSC 옵션을 넣으면 됨. 예) -w 는 수정 시 재 컴파일
- w 옵션은 위에 Recompile on changes 로 대체 가능

#### 구문 오류 보기

![](.README_images\bas-mon-errors.png)

![](.README_images\bas-mon-jump-to.png)

스콥 지정 해서 컴파일하기

![](.README_images\bas-mon-select-scope.png)

#### 매개변수 힌트 보기

![](.README_images\bas-parameter-show.png)

#### 추론된 타입 정보 보기

`컨트롤` + 마우스를 변수에 올리기

#### 자바스크립트 라이브러리 사용하기

타입 정의(d.ts)를 설치해야함. 

원래는 `npm install 패키지명` 을 사용해서 `package.json` 내용이 제대로 업데이트 해야하는데, 웹스톰으로는 import 구문에서 바로 설치 하게 해줌.
![](.README_images\install-dependencies.png)

#### 심볼 문서 보기

`컨트롤`+`Q`. MSDN 웹사이트에서 끌어다가 팝업으로 보여줌.

![](.README_images\show-symbol-documents-on-msdn.png)

이 상태에서 `시프트`+`F1` 누르면 브라우저로 사이트를 열어줌.

![](.README_images\show-symbol-coduments-onwebsite.png)

#### 코드 리팩토링

이것 자바스크립트 리팩토링과 같다.

https://www.jetbrains.com/help/webstorm/specific-javascript-refactorings.html

근데 모름. 추후 봐야됨. 자주 쓸 거 같다.

#### 자동 임포트

- 코드 완성으로 import 구문 추가

![](.README_images\set-auto-imports.png)

- 직접 치거나 코드 붙여넣기 할 때 import 구문 추가

 Unambiguous imports on the fly 

![](.README_images\set-auto-imports-on-paste.png)

- 임포트 팝업. 자동으로 임포트 안 되면 보여줌
  - 하나 제안시 알트 엔터 누르면 제안된 것 임포트
  ![](.README_images\set-auto-imports-popup-shift-enter.png)
  - 여러개 제안 시 알트 엔터 누르면 목록 보여줌
  ![](.README_images\set-suto-imports-popoup-multiple.png)
  - 팝업 숨기기
  ![](.README_images\set-auto-imports-popup-hide.png)
  - 퀵픽스 - 적절한 클래스를 알아서 제시해주면 선택하기
  ![](.README_images\set-auto-impoorts-when-class-detected.png)
  
 ### 리팩토링
 
 #### 심볼 이동 - 클래스, 함수, 변수
 
 `F6`  `Move Module Members`
 
![](.Using-With-Intellij-Webstorm_images\refector-move-symbol.png)

#### 클래스 멤버를 상위 클래스로 당기기

하위 클래스에 있는 메소드를 계층상 상위의 클래스로 올리는 기능.

```javascript
class Department {
       name;
       printName() {
           console.log("Department name: " + this.name);
       }
   }
   
   class AccountingDepartment extends Department {
       printMeeting() {
           console.log("The Accounting Department meets each Monday at 10am.");
       }
       generateReports() {
           console.log("Generating accounting reports...");
       }
   }

```

![](.Using-With-Intellij-Webstorm_images\refactor-pull-mtehods-up.png)

#### 이름 변경 

커서를 클래스에 가져다 놓고 `앜트` + `엔터`

    