// 12947번 : 하샤드 수
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let sum = String(x).split('').map((char) => Number(char)).reduce((sum, num) => sum + num);

    return x % sum === 0 ? true : false;
}