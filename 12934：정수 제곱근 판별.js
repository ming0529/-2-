// 12934번 : 정수 제곱근 판별
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let sqrt = Number.parseInt(Math.sqrt(n));

    return n === (sqrt ** 2) ? (sqrt + 1) ** 2 : -1;
}