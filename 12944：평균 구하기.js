// 12944번 : 평균 구하기
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }

    return sum / length;
}