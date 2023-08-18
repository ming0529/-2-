// 12954번 : x만큼 간격이 있는 n개의 숫자
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(x * (i + 1));
    }

    return array;
}