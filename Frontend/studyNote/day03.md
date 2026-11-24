# DAY 03 | DOM 요소 동적 생성과 검색 결과 렌더링

> 학습일: 2026.11.24 (화)  
> 파일: `Frontend/day03/index.html`, `Frontend/day03/script.js`, `Frontend/day03/style.css`  
> 학습 상태: **기본 실습·응용 실습·복습 완료 / GitHub 푸시 확인 / 최종 코드 정리 필요**  
> 학습 방식: 개념 → 직접 코딩 → 검색 결과 렌더링 → 코드 리뷰 → 기록

## 1. 오늘의 학습 목표

- `document.createElement()`로 HTML 요소를 생성한다.
- 생성한 요소의 `textContent`를 설정한다.
- `appendChild()`로 생성한 요소를 부모 요소에 붙인다.
- 배열의 `forEach()`를 활용해 여러 게시글을 개별 `<p>` 요소로 표시한다.
- DAY 02에서 구현한 `input` 이벤트와 `filter()`를 연결한다.
- 검색할 때 이전 결과를 지워 중복 출력을 방지한다.

## 2. 핵심 개념 정리

| 개념 | 의미 | 학습 예시 |
|---|---|---|
| `document.createElement("p")` | DOM의 새 `<p>` 요소 생성. 이 단계만으로는 문서에 표시되지 않음 | `const newPost = document.createElement("p")` |
| `textContent` | 요소의 텍스트 내용을 설정하거나 읽음 | `newPost.textContent = post.title` |
| `appendChild()` | 자식 노드를 부모 요소 뒤쪽에 추가 | `postList.appendChild(newPost)` |
| `forEach()` | 배열의 각 요소마다 콜백 실행 | `filteredPosts.forEach(post => { ... })` |
| `filter()` | 조건에 맞는 요소를 새 배열로 반환 | `posts.filter(post => ...)` |
| `addEventListener("input", ...)` | 입력값이 바뀔 때마다 처리 함수를 실행하도록 등록 | `searchInput.addEventListener(...)` |

### 중요하게 기억할 점

`createElement()` → `textContent` → `appendChild()` 순서로 생성·내용 지정·문서 연결을 진행한다.

`postList.textContent = ""`는 기존 검색 결과에 있던 텍스트와 자식 노드를 비운다. 이 작업이 없으면 새 검색 결과가 이전 결과 아래에 누적될 수 있다.

## 3. STEP 01~02 | 기본 실습

직접 작성한 코드:

```javascript
const postList = document.getElementById("postList");

const post = document.createElement("p");
post.textContent = "JavaScript 기초 공부";
postList.appendChild(post);
```

**이해도 문제:** `createElement()`와 `textContent`만 실행하면 페이지에 표시될까?  
**답:** 표시되지 않는다. 문서 안의 부모 요소에 연결해야 한다. **정답 1/1**

## 4. STEP 03 | 배열과 DOM 연결

직접 작성한 `forEach()` 실습:

```javascript
const posts = [
    { id: 1, title: "JavaScript 기초 공부" },
    { id: 2, title: "React 프로젝트 시작" },
    { id: 3, title: "부산 카페 방문" }
];

posts.forEach((post) => {
    const newPost = document.createElement("p");
    newPost.textContent = post.title;
    postList.appendChild(newPost);
});
```

이후 검색창의 입력값을 소문자로 변환하고 `filter()`로 검색한 다음, `filteredPosts.forEach()`로 `<p>` 요소들을 추가하는 실습까지 진행했다. 사용자는 화면 출력이 정상 동작한다고 보고했다.

### 최종 코드로 정리할 권장 예시

아래는 **학습한 기능을 한 이벤트 리스너로 통합한 정리본**이다. GitHub에 확인된 스크립트 전문과 동일한 코드는 아니다.

```javascript
const searchInput = document.getElementById("searchInput");
const postList = document.getElementById("postList");

const posts = [
    { id: 1, title: "JavaScript 기초 공부" },
    { id: 2, title: "React 프로젝트 시작" },
    { id: 3, title: "부산 카페 방문" }
];

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(keyword);
    });

    postList.textContent = "";

    filteredPosts.forEach((post) => {
        const newPost = document.createElement("p");
        newPost.textContent = post.title;
        postList.appendChild(newPost);
    });
});
```

HTML은 `<div id="postList"></div>`처럼 비워둔다. 기존 `posts.forEach()` 단독 실습은 최종 렌더링과 중복되지 않도록 별도로 보관하거나 주석 처리한다.

### 예상 결과 (현재 학습 데이터 3개 기준)

| 검색어 | 예상 게시글 |
|---|---|
| `java` | JavaScript 기초 공부 (1개) |
| `REACT` | React 프로젝트 시작 (1개) |
| `카페` | 부산 카페 방문 (1개) |
| `xyz` | 없음 (0개) |
| 빈 문자열 | 전체 3개 |

> 주의: DAY 03 배열에는 `javascript 배열 정리` 게시글이 없으므로 `java` 결과는 **1개**다. DAY 02의 4개 배열을 복사했다면 결과가 달라진다.

## 5. 실수와 해결 기록

### 학습 중 작성한 검색 조건 수정

처음에는 `post.title.toLowerCase(posts.title)`처럼 검색어와 게시글 제목을 혼동했고, 배열 이름 없이 `.filter()`를 사용하려 했다. 입력값은 `searchInput.value.toLowerCase()`로 받고 검색은 `posts.filter(...)`에서 수행하도록 수정했다.

### 이전 검색 결과 제거

처음에는 검색 결과를 계속 화면에 추가하는 방식이었으나, `postList.textContent = ""`를 먼저 실행해 기존 결과를 제거해야 함을 이해했다. 마지막 확인 문제에서 이 줄을 삭제하면 결과가 누적된다고 올바르게 답했다. **정답 1/1**

### GitHub 최신 코드 점검 (2026.11.24)

- 커밋 `9db1df9`: 최초 DAY 03 커밋.
- 커밋 `b6108d4`: 사용자가 수정 후 푸시했다고 보고했으며, `Frontend/day03/` 경로에 파일이 있는 것을 확인함.
- 다만 `script.js`에는 `searchInput`의 명시적 선언이 없고, `input` 리스너 2개가 남아 있음. `index.html`의 `postList` 내부에 정적 `<p>` 요소도 있음. **이 부분은 별도 최종 정리가 필요**하다.
- 브라우저에서 실제로 발생한 오류라는 뜻은 아니며, 저장소 파일을 검토해 발견한 개선 사항이다.

## 6. 오늘의 체크리스트

- [x] DOM 요소 생성 개념 이해
- [x] `createElement()` / `textContent` / `appendChild()` 실습
- [x] `forEach()`로 게시글 여러 개 렌더링
- [x] `filter()` 검색 결과를 DOM 요소에 출력하는 응용 실습
- [x] 검색어 변경 시 화면 결과 확인 (사용자 보고)
- [x] 확인 문제 정답 2/2
- [x] DAY 03 코드 GitHub 푸시 확인
- [ ] GitHub 버전의 중복 이벤트 리스너·선언·HTML 정적 요소 최종 정리
- [ ] 이 문서를 `Frontend/studyNote/day03.md`로 저장하고 푸시
- [ ] Notion DAY 03 페이지에 학습 기록 반영

## 7. 다음 학습

DAY 03 마무리 후 DAY 04에서 다음 학습 범위를 결정한다. 새 주제로 넘어가기 전에 위에 남아 있는 정리 항목을 끝낸다.

**오늘의 핵심 한 줄:** 배열에서 검색한 데이터를 `forEach()`로 순회하며 DOM 요소를 직접 만들고, 기존 결과를 비운 다음 새 결과를 표시하는 흐름을 익혔다.
