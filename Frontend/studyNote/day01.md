# DAY 01 | JavaScript 기본기

> 학습일: 2026.11.17 (화)  
> 주제: 배열·객체, `filter()`, `map()`, 문자열 메서드, 조건식  
> 학습 방식: 직접 코드 작성 → 실행 결과 확인 → 코드 리뷰 → 복습

## 1. 오늘의 학습 목표

- 배열과 객체에 담긴 게시글 데이터를 읽는다.
- `filter()`로 조건에 맞는 게시글을 선택한다.
- `map()`으로 필요한 속성만 뽑아 새 배열을 만든다.
- 대소문자를 구분하지 않고 문자열을 검색한다.
- 연산자 `&&`로 여러 조건을 결합한다.

> 범위: **DAY 01은 JavaScript 배열과 문자열 메서드 중심.** DOM, 이벤트, HTML/CSS 연결은 DAY 02에서 학습한다.

## 2. 핵심 개념 정리

| 개념 | 의미 | 학습 예시 |
|---|---|---|
| `const` | 변수의 재할당을 금지하는 선언 (`배열/객체 내부 변경까지 막지는 않음`) | `const posts = [...]` |
| 배열 `[]` | 순서가 있는 데이터의 모음 | `posts[0]` |
| 객체 `{}` | 속성(key)과 값(value)의 모음 | `post.title`, `post.views` |
| `filter()` | 조건이 참인 요소만 모아 새 배열 반환 | `posts.filter(post => post.views >= 100)` |
| `map()` | 각 요소에 함수를 적용한 결과로 새 배열 반환 | `posts.map(post => post.title)` |
| `toLowerCase()` | 영문을 소문자로 바꾼 새 문자열 반환 | `title.toLowerCase()` |
| `toUpperCase()` | 영문을 대문자로 바꾼 새 문자열 반환 | `title.toUpperCase()` |
| `includes()` | 문자열이 특정 글자를 포함하는지 검사 | `title.includes("java")` |
| `startsWith()` | 문자열이 특정 글자로 시작하는지 검사 | `title.startsWith("java")` |
| `&&` | 두 조건이 모두 참인지 검사 | `post.views >= 100 && ...` |
| `===` | 타입까지 같은지 비교 | `post.published === true` |
| `>=` | 크거나 같은지 비교 | `post.views >= 100` |

### 개념에서 특히 기억할 점

- `filter()`와 `map()`은 원본 배열을 직접 수정하지 않고 **새 배열**을 반환한다.
- `filter()` → `map()` 순서라면 **선별한 뒤 변환**하는 흐름이다.
- `toLowerCase()`와 `toUpperCase()`는 **원본 문자열을 변경하지 않는다.**
- `.includes("java")`와 `.startsWith("java")`는 현재 데이터에서 결과가 같아도 **검사 조건이 다르다.**
- 일반 변수·배열은 `posts`, `jsTitles`처럼 `camelCase`로 짓는 것이 관례다. `Posts`는 실행할 수 있지만 보통 클래스 등에 쓰는 `PascalCase`다.

## 3. STEP 01 | 기본 실습

```javascript
const posts = [
  { id: 1, title: "전포 카페 후기", category: "cafe", published: true, views: 120 },
  { id: 2, title: "JavaScript 공부 기록", category: "study", published: false, views: 0 },
  { id: 3, title: "광안리 카페 후기", category: "cafe", published: true, views: 85 }
];

// 1) 공개된 게시글만 선택
const publishedPosts = posts.filter(post => post.published === true);

// 2) 공개 + 카페 카테고리
const cafePosts = posts.filter(post =>
  post.published === true && post.category === "cafe"
);

// 3) 카페 게시글 제목만 추출
const titles = cafePosts.map(post => post.title);
// ["전포 카페 후기", "광안리 카페 후기"]

// 4) 조회수 100 이상인 게시글의 제목만 추출
const popularTitles = posts
  .filter(post => post.views >= 100)
  .map(post => post.title);
// ["전포 카페 후기"]
```

### 순서 이해 문제: `map()`을 먼저 하면?

```javascript
posts
  .map(post => post.title)
  .filter(post => post.views >= 100);
// 결과: [] (실행 오류가 아님)
```

`map()` 실행 후 `post`는 게시글 객체가 아니라 **제목 문자열**이다. 문자열의 없는 속성 `post.views`를 읽으면 `undefined`가 되고, `undefined >= 100`은 `false`여서 모두 제외된다. **처음에는 오류가 날 것으로 예상했지만, 실제 결과는 빈 배열 `[]`이다.**

### 문자열 대소문자 문제

```javascript
"JavaScript Study".toLowerCase(); // "javascript study"
"javascript study".toUpperCase(); // "JAVASCRIPT STUDY"
"전포 카페 후기".toUpperCase();       // "전포 카페 후기"
```

한글은 영문 대소문자 변환 대상이 아니므로 마지막 결과는 원문과 같다.

## 4. STEP 02 | 검색 실습

```javascript
const Posts = [
  { id: 1, title: "JavaScript 기초 공부", views: 150 },
  { id: 2, title: "React 프로젝트 시작", views: 80 },
  { id: 3, title: "javascript 배열 정리", views: 200 },
  { id: 4, title: "부산 카페 방문", views: 120 }
];

// 문제 1. 제목에 "javascript"가 포함된 게시글만 검색 (대소문자 무시)
const jsPosts = Posts.filter(post =>
  post.title.toLowerCase().includes("javascript")
);
const jsTitleList = jsPosts.map(post => post.title);

// 문제 2. 제목이 "java"로 시작하는 게시글만 검색
const jsStartsWithJava = Posts
  .filter(post => post.title.toLowerCase().startsWith("java"))
  .map(post => post.title);

// 문제 3. 조회수 100 이상 + 제목에 "java" 포함 + 제목만 출력
const jsTitles = Posts
  .filter(post =>
    post.views >= 100 && post.title.toLowerCase().includes("java")
  )
  .map(post => post.title);

console.log(jsTitles);
// ["JavaScript 기초 공부", "javascript 배열 정리"]
```

> 위 코드는 공부한 내용을 간결하게 재정리한 버전이다. 원래 작성한 `Posts`, `jsPosts`, `jstitle`, `Jstitles` 등 변수명은 학습 당시 코드에 남아 있다.

## 5. 실수와 해결 기록

| 상황 | 원인 | 수정·학습 내용 |
|---|---|---|
| 처음 검색 코드에서 `post.title = javascipt` 사용 | `=`은 검색이 아닌 **대입**, `javascipt`는 선언되지 않은 이름이면 `ReferenceError`를 일으킴 | `post.title.toLowerCase().includes("javascript")` 사용 |
| **포함** 검색 문제에서 `startsWith("java")` 작성 | 시작 여부만 확인해서 요구조건보다 좁게 검색함 | `includes("java")`로 수정 |
| `map()` 후 `post.views`를 읽으면 오류라고 예상 | `post`가 문자열로 바뀐 점을 놓침 | 오류 대신 `undefined` → 비교 결과 `false` → 빈 배열 반환 |
| `toUpperCase()` 결과에 대한 혼동 가능성 | 한글에는 영문 대소문자 개념이 없음 | 한글 제목은 그대로 출력됨 |

## 6. 오늘의 최종 학습 결과

- [x] `filter()` 조건 작성
- [x] `map()` 제목 추출
- [x] `filter()`와 `map()` 연결
- [x] `toLowerCase()`로 대소문자 무시 검색
- [x] `includes()`와 `startsWith()` 차이 이해
- [x] `&&`로 조건 2개 결합
- [x] 요구사항에 맞게 최종 코드를 수정
- [ ] `const`, 배열·객체, 함수 문법을 별도 문제로 더 깊이 복습 (이날은 사용 위주)

## 7. 다음 학습 (DAY 02)

- HTML 요소와 DOM의 관계
- `document.getElementById()`로 요소 선택
- `addEventListener()`로 이벤트 처리
- 입력값 `.value`를 이용해 게시글 검색 화면 구현

**정리:** DAY 01에서는 실제 게시글 데이터를 `filter()`로 선택하고 `map()`으로 제목 배열로 바꾸는 과정을 익혔다. 다음에는 미리 만든 `index.html`, `script.js`, `style.css`를 이용해 화면과 JavaScript를 연결한다.
