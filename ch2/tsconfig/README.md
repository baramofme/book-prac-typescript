## tsconfig

### 생성

`tsc --init`

### 주요 옵션

- target: 컴파일 후 변환될 ECMA스크립트 버전
- module: 모듈 형식 지정
- sourceMap : 컴파일 후 맵(map) 파일의 생성 여부 결정
- strict : true 면 엄격 타입 검사 모드 활성화
- noImplicitAny : any 타입으로 암묵적 형변환 여부를 결정. 생략되면 기본값은 false
- esModuleInterop : ECMA 스크립트 모듈과 상호 운용성 가능하게 하는 속성. true 면 CommonJS 모듈을 디폴트 모듈처럼 호출 가능.

#### noImplicitAny

- false 면, 타입을 명시하지 않아도 암시적으로 Any 로 설정한다.
- true 면, 타입을 명시하지 않으면 오류를 낸다.

#### 그 외는 폴더별 예시 파일 작성

### 컴파일과 실행

#### 컴파일

**하나 컴파일**

```
tsc 파일.ts
```

**컴파일 기준 경로 변경**

```
tsc -p ../
```

> tsconfig. 가 없으면 오류 난다.

**경로 변경하면서 커스컴 설정파일 적용**

```
tsc -p ../custom-tsconnfig.json
```


**컴파일 결과 타겟 지정**

```
tsc 파일명.ts -t ES5
```

**여러 파일 컴파일**

직접 명시하기

```
tsc 파일1.ts 파일2.ts -out 파일합침.js
```

목록을 생성 후 `@목록.txt`로 넘기기

```
dir *.ts /b /s
C:\Users\jihoon\WebstormProjects\book-prac-typescript\ch2\tsconfig\mergeToOnefile\hello1.ts
C:\Users\jihoon\WebstormProjects\book-prac-typescript\ch2\tsconfig\mergeToOnefile\hello2.ts
```

```
tsc @ts-file.txt 
```

**변경 감시하다가 지속적으로 컴파일하기**

```
tsc 파일명.ts -w
```

#### 실행

tsc 로 ts 파일 컴파일 시 js 파일 생성됨.

```
node 파일명.js
```

#### 동시에 ts-node

js 파일을 만들지 않고 ts 컴파일한 결과만 출력할 때

설치
```
npm install -g ts-node
```

버전 명시
```
npm install -g ts-node@3.3.0
```

실행
```
ts-node 파일명.ts
```

즉시 실행

```
>ts-node -e "let msg:string='hello'; console.log(msg);"
hello
```