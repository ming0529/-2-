// 12931번 : 자릿수 더하기
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(N) {
    let array = String(N).split('').map((char) => Number(char));

    return array.reduce((sum, num) => sum + num);
}