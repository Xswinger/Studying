function main() {
    const tests = new Map([
        ["#FF9933", {r: 255, g: 153, b: 51}],
        ["#beaded", {r: 190, g: 173, b: 237}],
        ["#000000", {r: 0, g: 0, b: 0}]
    ])

    for (const test of tests) {
        console.log(`test: ${JSON.stringify(test[0])}`);
        console.log(`expected: ${JSON.stringify(test[1])}`);
        console.log(`returned: ${JSON.stringify(solution(test[0]))}`);
        console.log(`status: ${JSON.stringify(solution(test[0])) === JSON.stringify(test[1]) ? 'success' : 'fail'}\n`);
    }

}

function solution(hexString) {
    const hexToRgb = hex => parseInt(hex, 16);
    
    return {r: hexToRgb(hexString.slice(1, 3)), g: hexToRgb(hexString.slice(3, 5)), b: hexToRgb(hexString.slice(5, 7))};
}

main();