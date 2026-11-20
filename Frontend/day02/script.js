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