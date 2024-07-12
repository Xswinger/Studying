function main() {
    const tests = [
        ['abc', 'cde', 'abCCde'],
        ['ab', 'aba', 'aBABA'],
        ['abab', 'bababa', 'ABABbababa'],
        ["abcdeFgtrzw", "defgGgfhjkwqe", "abcDeFGtrzWDEFGgGFhjkWqE"],
        ['crxrxhvpdwMZwKRCnvSYr', 'AbMYVrdYWGkInFgAknoxsTZkIdBazeftGnPHlEfiJ', "cRXRXHVPdWmZWkrCNVsYRAbmyVrDyWGKINFgA"]
    ];

    for (const test of tests) {
        console.log(`test: ${test[0]} ${test[1]}`);
        console.log(`expected: ${test[2]}`);
        console.log(`returned: ${solution(test[0], test[1])}`);
        console.log(`status: ${solution(test[0], test[1]) === test[2] ? 'success' : 'fail'}\n`);
    }
}

function solution(a, b) {

    const countSymbols = (str) => {
        let symbolsMap = new Map();
        str.split('').forEach(element => {
            element = element.toLowerCase();
            symbolsMap.set(element, symbolsMap.has(element) ? symbolsMap.get(element) + 1 : 1);
        });
        return symbolsMap;
    };

    const replaceCase = (symbolsMap, str) => {
        return str.split("").map(symb => {
            if (symbolsMap.has(symb.toLowerCase()) && symbolsMap.get(symb.toLowerCase()) % 2 !== 0) {
                return symbolsMap.has(symb) ? symb.toUpperCase() : symb.toLowerCase();
            }
            return symb;
        }).join('');
    };

    const aSymbolsMap = countSymbols(a);
    const bSymbolsMap = countSymbols(b);

    return replaceCase(bSymbolsMap, a) + replaceCase(aSymbolsMap, b);
}

main();