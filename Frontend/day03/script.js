// STEP 02. DOM 요소 생성 실습
const postList = document.getElementById("postList");

// 문제 1. 새로운 p 요소 생성
const post = document.createElement("p");

// // 문제 2. p 요소에 "JavaScript 기초 공부" 입력
// post.textContent = "JavaScript 기초 공부";

// // 문제 3. 생성한 p 요소를 postList에 추가
// postList.appendChild(post);

const posts = [
    { id: 1, title: "JavaScript 기초 공부" },
    { id: 2, title: "React 프로젝트 시작" },
    { id: 3, title: "부산 카페 방문" }
];
// posts.forEach((post) => {
//     // 1. p 요소 생성
//     const newPost = document.createElement("p");
//     // 2. post.title을 textContent에 설정
//     newPost.textContent = post.title;
//     // 3. postList에 추가
//     postList.appendChild(newPost);
// });

// STEP 03. 마지막 응용실습
// searchInput.addEventListener("input", () => {

//     // 1. 검색어를 소문자로 변환
//     const keyword = searchInput.value.toLowerCase();

//     // 2. 검색어가 포함된 게시글 추출
//     const filteredPosts = posts.filter((post) => {
//         return post.title.toLowerCase().includes(keyword);
//     });

//     console.log(filteredPosts);
// });

// STEP 03-3 기존 검색 결과 비우기
// 힌트 : 빈 문자열 `""`을 대입하면 요소 안의 기존 텍스트와 자식 요소가 모두 제거됨
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(keyword);
    });

    // 기존 검색 결과 비우기
    postList.textContent = "";

    console.log(filteredPosts);

    // 검색된 게시글을 화면에 출력
    filteredPosts.forEach((post) => {
        const newPost = document.createElement("p");
        newPost.textContent = post.title;
        postList.appendChild(newPost);
    });
});