# DAY 02 | DOM과 이벤트 처리

> 학습일: 2026.11.18 (수)  
> 작업 경로: `Frontend/day02/`  
> 학습 상태: **실습 완료 · 코드 GitHub 반영 확인**  
> 복구 및 커밋: 2026.11.20 (`fbd6814` — `feat: implement day02 post search`)  
> 학습 방식: 개념 이해 → 직접 코드 작성 → 브라우저 콘솔 테스트 → 화면 출력 → 오류 해결

## 1. 오늘의 목표

- HTML 요소를 JavaScript에서 선택한다.
- `input` 이벤트가 발생할 때마다 입력값을 읽는다.
- DAY 01의 `filter()`, `map()`을 이용해 게시글을 검색한다.
- 검색된 제목을 웹페이지에 출력한다.

**오늘의 범위:** DOM 선택 및 이벤트 기초, 검색 결과 텍스트 출력. HTML 요소 동적 생성(`createElement()`, `appendChild()`)은 DAY 03에서 진행한다.

## 2. 학습 체크리스트

- [x] `document.getElementById()`로 HTML 요소 선택
- [x] `.value`로 입력창 값 읽기
- [x] `addEventListener("input", ...)`로 입력 이벤트 처리
- [x] `.textContent`로 웹페이지에 텍스트 표시
- [x] `filter()`, `map()`, `join()`으로 검색 결과 출력
- [x] Chrome 개발자 도구에서 오류 원인 확인
- [x] DAY 02 검색 코드 GitHub 푸시 및 원격 반영 확인
- [ ] GitHub용 Markdown 학습 노트 저장 및 커밋
- [ ] Notion DAY 02 학습 노트 실제 반영 확인

> **체크 상태 메모:** 노트 파일은 정리용으로 작성했으며, 노트의 GitHub 업로드와 Notion 저장까지 완료된 것은 아직 확인하지 않았다. 해당 작업을 끝낸 후 직접 체크한다.

## 3. 핵심 개념 정리

| 개념 | 역할 | 예시 |
|---|---|---|
| DOM | JavaScript가 웹 문서의 요소를 다룰 수 있도록 표현한 객체 구조 | `document` |
| `getElementById()` | 지정한 `id`를 가진 HTML 요소를 찾음 | `document.getElementById("searchInput")` |
| `.value` | 입력 요소의 현재 값 읽기/설정 | `searchInput.value` |
| `addEventListener()` | 특정 이벤트가 발생했을 때 실행할 함수 등록 | `searchInput.addEventListener("input", ...)` |
| `input` 이벤트 | 입력 요소의 값이 사용자 입력 등으로 변경될 때 발생 | 검색창에 글자를 입력할 때 |
| `.textContent` | HTML 요소의 텍스트를 읽거나 바꿈 | `postList.textContent = "결과"` |
| `filter()` | 조건에 맞는 배열 요소만 추출 | `posts.filter(...)` |
| `map()` | 배열 요소를 새 값으로 변환 | `filteredPosts.map(post => post.title)` |
| `join(", ")` | 배열 원소를 쉼표+공백으로 연결한 문자열 생성 | `titles.join(", ")` |
| `defer` | HTML 파싱을 막지 않고 외부 스크립트를 내려받아, 문서 파싱 완료 후 실행하도록 함 | `<script src="script.js" defer></script>` |

### 기억할 점

1. `getElementById()`는 **요소 자체**를 가져오고, `.value`는 **입력값**을 가져온다.
2. 검색은 최초 페이지 로드 시 한 번만 하는 것이 아니라, `input` 이벤트가 발생할 때마다 다시 실행해야 한다.
3. `console.log()`는 개발자 도구에 출력한다. **화면에 표시하려면** `.textContent` 등으로 DOM을 업데이트해야 한다.
4. 검색어와 제목을 모두 소문자로 비교하면 영문 대소문자 차이를 무시할 수 있다.
5. `filter()`로 게시글을 고르고 `map()`으로 제목을 추출한 다음, `join()`으로 텍스트를 연결한다.

## 4. 직접 작성한 코드와 최종 결과

### 4-1. HTML (`Frontend/day02/index.html`)

현재 GitHub `main` 브랜치에서 확인한 코드:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시글 검색</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>게시글 검색</h1>
    <input type="text" id="searchInput" placeholder="게시글 제목을 검색하세요">
    <div id="postList"></div>
</body>
</html>
```

### 4-2. 최종 JavaScript (`Frontend/day02/script.js`)

현재 GitHub `main` 브랜치에서 확인한 실제 코드:

```javascript
// DAY 02 | DOM과 이벤트 처리

// 1. HTML 요소 선택
const searchInput = document.getElementById("searchInput");
const postList = document.getElementById("postList");

// 2. 게시글 데이터
const posts = [
    { id: 1, title: "JavaScript 기초 공부" },
    { id: 2, title: "React 프로젝트 시작" },
    { id: 3, title: "javascript 배열 정리" },
    { id: 4, title: "부산 카페 방문" }
];

// 3. 검색창 입력 이벤트 처리
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    // 4. 검색어가 포함된 게시글 추출
    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(keyword);
    });

    // 5. 게시글 제목만 추출
    const titles = filteredPosts.map((post) => {
        return post.title;
    });

    // 6. 검색 결과를 웹페이지에 출력
    postList.textContent = titles.join(", ");
});
```

### 4-3. 동작 흐름

```text
검색창에 글자 입력
  ↓
input 이벤트 발생
  ↓
searchInput.value → toLowerCase()
  ↓
filter() : 제목에 검색어가 포함된 게시글만 선택
  ↓
map() : 게시글 객체에서 title만 추출
  ↓
join(", ") : 제목 배열을 하나의 문자열로 변환
  ↓
postList.textContent : 검색 결과를 화면에 표시
```

### 4-4. 검색 결과 (코드 기준 예상값)

| 검색어 | 표시될 내용 |
|---|---|
| `java` | `JavaScript 기초 공부, javascript 배열 정리` |
| `REACT` | `React 프로젝트 시작` |
| `카페` | `부산 카페 방문` |
| `xyz` | 빈 문자열(표시 없음) |
| 입력값을 모두 지움 | 전체 게시글 제목 4개 |

**실제 확인:** 대화에서 콘솔의 입력 이벤트 동작과 검색 결과의 웹페이지 출력 성공을 직접 보고했다. 위 표의 모든 검색어를 하나씩 테스트했다는 기록은 없으므로, 표는 현재 코드로부터 예상한 결과이다. 초기 페이지 로드 직후에는 `input` 이벤트가 아직 발생하지 않아 목록이 비어 있다.

## 5. 발생한 문제와 해결 과정

### 문제 1. 개발자 도구 Console에 `j`, `java`를 입력해 `ReferenceError` 발생

- **현상:** `Uncaught ReferenceError: j is not defined`, `java is not defined`.
- **원인:** 웹페이지 검색창이 아닌 개발자 도구 **Console에 직접 입력**하여, 브라우저가 이를 JavaScript 변수로 해석했다.
- **해결:** 웹페이지의 `<input id="searchInput">`에 `java`를 입력하고 Console에서 `j` → `ja` → `jav` → `java` 출력을 확인했다.
- **배운 점:** Console 입력과 웹페이지 사용자 입력은 다르다.

### 문제 2. 검색 결과가 콘솔에만 표시되고 웹페이지에는 보이지 않음

- **현상:** `console.log(filteredPosts)`는 동작했지만 화면에 게시글이 표시되지 않았다.
- **원인:** DOM의 내용을 수정하는 코드가 없었다. 초기 시도에서는 `postList.textContent = searchInput.value`로 **검색어만** 화면에 표시했다.
- **해결:** 이벤트 함수 안에서 `filter()` → `map()` → `join()` 결과를 `postList.textContent`에 대입했다.
- **배운 점:** 콘솔 출력과 화면 렌더링은 다른 작업이다.

### 문제 3. 검색 코드를 처음에 이벤트 함수 밖에 작성

- **현상:** 입력이 바뀌어도 검색된 게시글 목록이 자동 갱신되지 않는 구조였다.
- **원인:** `filter()` 및 `map()`이 페이지 로드 시 실행되는 위치에 있었으며, `includes()`에 검색어도 빠져 있었다.
- **해결:** `input` 이벤트 콜백 안에서 현재 `keyword`를 읽고 필터링하도록 재구성했다.
- **배운 점:** 사용자의 입력에 따라 바뀌는 로직은 해당 이벤트가 발생할 때 실행되어야 한다.

### 문제 4. 다른 PC에서 작업한 DAY 02 코드가 `git pull` 후에도 보이지 않음

- **현상:** `git pull`은 `Already up to date.`를 반환했지만 검색 기능 코드가 보이지 않았다.
- **확인 결과:** 당시 GitHub `main`에는 요소 선택과 `console.log()`까지만 있었으며, 검색 기능 커밋은 존재하지 않았다.
- **해결:** 이 채팅의 실습 기록을 참고해 `script.js`를 복구하고 2026.11.20에 `fbd6814` 커밋으로 GitHub 반영을 확인했다.
- **배운 점:** `git pull`이 최신이라는 메시지는 **원격 브랜치에 있는 커밋을 모두 받았다**는 뜻이지, 다른 PC의 미반영 작업이 자동으로 존재한다는 뜻은 아니다. 당시 본가 PC에서 실제로 어떤 Git 작업이 누락됐는지는 확인하지 못했다.

## 6. 확인 문제와 학습 결과

**문제:** 아래 HTML 요소에서 `console.log(user.value)`의 출력 결과는?

```html
<input id="username" type="text" value="나무꾼">
```

```javascript
const user = document.getElementById("username");
console.log(user.value);
```

- **내 답:** `나무꾼`
- **채점:** **1문항 중 1문항 정답**
- **이유:** `getElementById()`가 입력 요소를 찾고 `.value`는 입력값을 읽는다.

**실습 결과:** HTML 요소 선택, 입력 이벤트 콘솔 확인, 검색 결과 DOM 출력 성공을 대화에서 확인했다. 전체 테스트 케이스별 검증 기록은 별도로 남기지 않았다.

## 7. 핵심 한 줄과 다음 학습

> **DAY 02 핵심:** 입력 이벤트가 발생할 때 `value`로 검색어를 읽고, `filter()`와 `map()`으로 가공한 결과를 `textContent`로 화면에 반영한다.

**DAY 03 예고:** `document.createElement()`, `.textContent`, `.appendChild()`로 검색된 게시글마다 별도의 HTML 요소를 생성한다. DAY 02에서는 쉼표로 연결된 한 줄 텍스트만 표시했다.

---

**참고:** [GitHub의 DAY 02 JavaScript 코드](https://github.com/txw-22/study/blob/main/Frontend/day02/script.js) · [GitHub의 HTML 코드](https://github.com/txw-22/study/blob/main/Frontend/day02/index.html)
