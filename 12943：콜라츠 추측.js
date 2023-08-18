// 12943번 : 콜라츠 추측
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let count = 0;
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }

        count++;
    }

    return count < 500 ? count : -1;
}