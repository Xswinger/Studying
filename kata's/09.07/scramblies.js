function main() {
    const tests = [
        ['rkqodlw', 'world', true],
        ['cedewaraaossoqqyt', 'codewars', true],
        ['katas', 'steak', false],
        ['scriptjavx', 'javascript', false],
        ["abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000), true]
    ];

    for (const test of tests) {
        console.log(`test: ${test[0]} ${test[1]}`);
        console.log(`expected: ${test[2]}`);
        console.log(`returned: ${solution(test[0], test[1])}`);
        console.log(`status: ${solution(test[0], test[1]) === test[2] ? 'success' : 'fail'}\n`);
    }
}

function solution(str1, str2) {
    const alph = new Map();
    for (let letter of str1.split('')) {
        alph.set(letter, alph.has(letter) ? alph.get(letter) + 1 : 1);
    }
    for (let letter of str2.split('')) {
        if (alph.has(letter) && alph.get(letter) > 0) {
            alph.set(letter, alph.get(letter) - 1);
        } else {
            return false;
        }
    }
    return true;
}

main();