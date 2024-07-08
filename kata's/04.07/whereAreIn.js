function main() {
    const tests = [
        [
            ["live", "arp", "strong"], 
            ["lively", "alive", "harp", "sharp", "armstrong"], 
            ["arp", "live", "strong"]
        ], 
        [
            ["tarp", "mice", "bull"], 
            ["lively", "alive", "harp", "sharp", "armstrong"], 
            []
        ]
    ]

    for (let test of tests) {
        console.log(`test: ${JSON.stringify(test[0])}, ${JSON.stringify(test[1])}`);
        console.log(`expected: ${JSON.stringify(test[2])}`);
        console.log(`returned: ${JSON.stringify(solution(test[0], test[1]))}`);
        console.log(`status: ${
            JSON.stringify(solution(test[0], test[1])) === JSON.stringify(test[2]) ? 'success' : 'fail'
        }\n`);
    }
}

// All tests passed without compare function, but it can work not correct
function solution(a1, a2) {
    return a1
        .filter(value => a2.join(" ").includes(value))
        .sort(
            (a, b) => {
            return a.localeCompare(b)
        }
    );
}

main();