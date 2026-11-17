// study/day01/day01.js

/* 
Day01 | JavaScript 기본기
2026.11.17
---
1. 오늘 배운 개념
2. 직접 작성한 코드
3. 발생한 오류와 해결 방법
4. 새롭게 알게 된 점
5. 내일 복습할 내용
*/
const posts = [
    {
        id: 1,
        title: "전포 카페 후기",
        category: "cafe",
        published: true,
        views: 120
    },
    {
        id: 2,
        title: "JavaScript 공부 기록",
        category: "study",
        published: false,
        views: 0
    },
    {
        id: 3,
        title: "광안리 카페 후기",
        category: "cafe",
        published: true,
        views: 85
    }
];

// Step 01. 개념 복습
// 문제 1. `published` 가 `true`인 게시글만 추출 - 자동추출하는 것
const publishedPosts = posts.filter((post) => {
    return post.published === true;
})
console.log(publishedPosts)

/*
문제 1-1. 위 코드에서 post.published === true를 post.views >= 100으로 변경하면 어떤 게시글이 출력될까?
A. 전포카페 후기 게시물 / post.views >= 100은 조회수가 100이상인 게시글만 추출하라는 뜻
 */

/* 
문제 2. 공개된 게시글 중 카테고리가 `cafe`인 게시글만 추출
조건 1. `published` 가 `true`일 것
조건 2. `categoty`가 "cafe" 일 것
hint : JavaScript에서 `&&`는 AND(그리고)연산자다. 두 조건이 모두 참이어야 한다.
*/
const cafePosts = posts.filter((post) => {
    return post.published === true && post.category === "cafe"
})
console.log(cafePosts)

// 코드리뷰 : post.published === true는 post.published로 줄여 써도 돼. published가 불리언 값이기 때문

/* 
문제2-2. 방금 추출한 카페 게시글에서 제목만 새로운 배열로 만들어보기
목표 결과 => ["전포 카페 후기","광안리 카페 후기"]
*/
const titles = cafePosts.map((post) => {
    return post.title
})
console.log(titles)

// 코드 리뷰 : const titles = cafePosts.map(post => post.title); 줄일 수 있음

/*
문제 3. `posts` 배열에서 조회수가 100 이상인 게시글의 제목만 추출하기
목표 결과 => ["전포 카페 후기"]
*/
const popularTitles = posts
    .filter((post) => {
        return post.views >= 100;
    })
    .map((post) => {
        return post.title;
    });

console.log(popularTitles);

/*
코드리뷰 : 
const popularTitles = posts
  .filter(post => post.views >= 100)
  .map(post => post.title); 로 간결하게 작성 가능
*/

/*
문제 4. 아래 두 코드는 결과가 같을까, 다를까 ?
A 코드
posts
  .filter(post => post.views >= 100)
  .map(post => post.title);
B 코드
posts
  .map(post => post.title)
  .filter(post => post.views >= 100);
A. A는 정상 실행되지만, B는 오류가 발생한다.

이유 : 핵심은 map() 실행 후 배열 안의 데이터 타입이 달라진다는 것이다.
A는 filter() 먼저 실행으로 조회수가 100 이상인 게시글 객체만 남김.
그 다음에 map() 실행으로 title 속성만 추출한다.
B는 map() 먼저 실행하여 게시글 객체를 제목 문자열로 변환.
그 다음 filter() 실행 시 오류 발생. 이 시점의 post는 객체가 아니라 문자열(string)임.
문자열에는 views 속성이 없으므로 
post.views        // undefined
undefined >= 100  // false
이렇게 평가가 됨
 */
/*
문제 5. 아래 코드를 실행하면 어떻게 될까?
const titles = posts.map(post => post.title);

console.log(titles[0].toUpperCase());
A. 2."전포 카페 후기"가 대문자로 변환되어 출력된다. 
이유 : toUpperCase()는 JavaScript에서 문자열의 영문 소문자를 대문자로 변환하는 메서드
 */
/*
문제 6. 아래 코드를 실행하면 어떻게 될까?
const title = "JavaScript Study";

console.log(title.toLowerCase());
A. javascript study
이유 : toLowerCase()는 JavaScript에서 문자열의 영문 대문자를 소문자로 변환하는 메서드

*/

// Step 02. 실습 / 응용문제
const Posts = [
    { id: 1, title: "JavaScript 기초 공부", views: 150 },
    { id: 2, title: "React 프로젝트 시작", views: 80 },
    { id: 3, title: "javascript 배열 정리", views: 200 },
    { id: 4, title: "부산 카페 방문", views: 120 }
];
/* 
문제 1. 게시글 검색 기능 만들기
요구사항
1. 제목에 javacsript가 포함된 게시글을 찾아줘.
2. 대문자와 소문자는 구분하지 않아.
3. 검색된 게시글의 제목만 새로운 배열로 반환해.
예상 결과
[
  "JavaScript 기초 공부",
  "javascript 배열 정리"
]
hint 1.toLowerCase() : 문자열을 소문자로 변환
hint 2.includes("javascipt") : 문자열에 특정 단어가 포함되어 있는지 확인
*/
const jsPosts = Posts
    .filter((post) => {
        return post.title.toLowerCase().includes("javascript");
    })

console.log(jsPosts);

const jstitle = jsPosts.map((post) => {
    return post.title;
});

console.log(jstitle);

/*
코드리뷰 
const jsTitles = Posts
    .filter((post) => {
        return post.title.toLowerCase().includes("javascript");
    })
    .map((post) => {
        return post.title;
    });

console.log(jsTitles);
*/
/*
문제 2.Posts 배열에서 제목이 java로 시작하는 게시글만 추출해 보자.
조건 1. 대소문자 구분 없이 검색
조건 2. filter() 사용
조건 3. 제목만 출력하도록 map() 사용
목표결과 : 
 [
  "JavaScript 기초 공부",
  "javascript 배열 정리"
]
hint : 방금 작성한 코드에서 includes()를 다른 문자열 메서드로 바꾸면 해결
*/
const jsTitles = Posts
    .filter((post) => {
        return post.title.toLowerCase().startsWith("java");
    })
    .map((post) => {
        return post.title;
    });

console.log(jsTitles);
/*
문제3. 기존 Posts 배열로 다음 조건을 만족하는 코드를 작성
조건 1. 조회수 100 이상
조건 2. 제목에 'java' 포함 (대소문자 구분없이)
조건 3. 결과는 제목만 담긴 배열
예상 결과 :
["JavaScript 기초 공부", "javascript 배열 정리"]
*/
const Jstitles = Posts
    .filter((post) => { 
        return post.views >= 100 && post.title.toLowerCase().includes("java");
    }) 
    .map((post) => {return post.title;})
console.log(Jstitles);

