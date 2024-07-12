function main() {
    const tests = new Map([
        [[false,1,0,1,2,0,1,3,"a"], [false,1,1,2,1,3,"a",0,0]]
    ]);

    for (const test of tests) {
        console.log(`test: ${test[0]}`);
        console.log(`expected: ${test[1]}`);
        console.log(`returned: ${solution(test[0])}`);
        console.log(`status: ${JSON.stringify(solution(test[0])) === JSON.stringify(test[1]) ? 'success' : 'fail'}\n`);
    }
}

function solution(arr) {
    let filteredArr = arr.filter(val => val !== 0);
    return filteredArr.concat(new Array(arr.length - filteredArr.length).fill(0)); 
}

main();