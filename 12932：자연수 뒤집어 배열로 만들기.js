// 12932번 : 자연수 뒤집어 배열로 만들기
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    let array = String(n).split('').map((char) => Number(char));

    return array.reverse();
}