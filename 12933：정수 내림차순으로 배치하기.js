// 12933번 : 정수 내림차순으로 배치하기
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let array = String(n).split('').map((char) => Number(char)).sort((lhs, rhs) => rhs - lhs);

    return Number(array.join(''));
}