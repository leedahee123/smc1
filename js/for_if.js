for(let i=1; i<=12; i++) {
    console.log(`${i}월`);
}

// 1. 1월 ~ 12월 출력

for(let i=1; i<=12; i++) {
    if(i%2 === 0);
    console.log(`${i}월`);
}

// 2. 짝수달 출력

let A = 1;
let B = 1;

let inputNumber = prompt("피보나치 표현 숫자")*1;

while(true) {
    let temp = A + B;
    console.log(temp);
    A = B;
    B = temp;

    if (temp > inputNumber) {
        break;
    }
}

// 3. 피보나치 배열

const FIXED_PRICE = 1000;
const MANUFATURE_PRICE_PER_ONE = 70;
const LIST_PRICE_PER_ONE = 100;

let manufactureCount = 0;
while (true) {
    if(FIXED_PRICE + MANUFATURE_PRICE_PER_ONE  * manufactureCount < LIST_PRICE_PER_ONE * manufactureCount) {
            break;
    }
    manufactureCount++;
} 
alert(manufactureCount);

// 4. 월드전자 노트북 생산

alert(parseInt(FIXED_PRICE / (LIST_PRICE_PER_ONE - MANUFATURE_PRICE_PER_ONE)))

// 4-1. 월드전자 노트북 생산 (while없이 푸는 법)

const BIG_SUGAR = 5;
const SMALL_SUGAR = 3;
let sugar = 16;

let bagCount = 0;

while(true) { // 16 0
    if (sugar % 5 === 0) {
        bagCount += sugar / 5;
        break;
    }else if (sugar <= 0) {
        bagCount = -1;
        break;
    }

    sugar -= 3;
    bagCount ++;
}

// 5. 상근이의 설탕공장

const TARGET_STRING = "AAABBBCCC";

let result = "";
let nowCharacter = "";
let nowCharacterCount = 0;

for (const char of TARGET_STRING) {
    if (!nowCharacter) {
        nowCharacter = char;
        nowCharacterCount ++;
    } else {
        if (nowCharacter === char) {
            nowCharacterCount ++;
        }
        else {
            if (nowCharacterCount === 1) {
                result += `${nowCharacter}`;    
            }
            else {
                result += `${nowCharacterCount}${nowCharacter}`;
            }
            nowCharacter = char;
            nowCharacterCount = 1;
        }
    }
}
if (nowCharacterCount === 1) {
    result += `${nowCharacter}`;    
}
else {
    result += `${nowCharacterCount}${nowCharacter}`;
}

console.log(result);

// *추가문제. 문자열 출력