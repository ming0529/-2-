// 12928번 : 약수의 합
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }

    return sum;
}