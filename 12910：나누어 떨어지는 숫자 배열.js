// 12910번 : 나누어 떨어지는 숫자 배열
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    let multiples = [];
    for (let num of arr) {
        if (num % divisor == 0) {
            multiples.push(num);
        }
    }

    if (multiples.length != 0) {
        multiples.sort((lhs, rhs) => lhs - rhs);
    } else {
        multiples.push(-1);
    }

    return multiples;
}