function main() {
    const tests = new Map([
        [" Hello there thanks for trying my Kata", "#HelloThereThanksForTryingMyKata"],
        ["    Hello     World   ", "#HelloWorld"],
        ["", false],
        ["code wars", "#CodeWars"]
    ])

    for (let test of tests) {
        console.log(`test: ${test[0]}`);
        console.log(`expected: ${test[1]}`);
        console.log(`returned: ${solution(test[0])}`);
        console.log(`status: ${solution(test[0]) === test[1] ? 'success' : 'fail'}\n`);
    }
}

function solution(words) {
    return (!words.trim() || str.replace(/\s/g, '').length > 139) 
        ? false 
        : '#' + words.replace(/(?<=\s|^)\w/g, symbol => symbol.toUpperCase()).replace(/\s/g, '');
}

main();