// 12912번 : 두 정수 사이의 합
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    let min;
    let max;
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}