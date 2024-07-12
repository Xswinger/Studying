function main() {
    const tests = new Map([
        ['0', 0],
        ['123', 123],
        ['123.456', 123.456], 
        ['+ -5 5', 0], 
        ['* + 2 2 3', 12],
        ['/ + 3 5 * 2 2', 2],
        ['- / - + 241455.19950263202 / + 889584.1541387144 * 630229.4088545078 880399.6111774961 486323.52910245955 51277.909933202885 201468.702601271 530498.5681860553', -530491.961234546],
        ['* 47119.09024138191 / / - - 924695.5508091106 335128.8681533287 / + 196693.1761971241 111941.45699167621 * 921071.423498475 / 879746.8937899702 649054.2427706975 855168.3790627135 / 468560.0437111744 - - * + 894792.8699697377 444621.3961943826 * 621612.8919141411 603584.7253081859 424225.16435316746 106523.14450358578', 34840624903299504]
    ]);

    for (let test of tests) {
        console.log(`test: ${test[0]}`);
        console.log(`expected: ${test[1]}`);
        console.log(`returned: ${solution(test[0])}`);
        console.log(`status: ${solution(test[0]) === test[1] ? 'success' : 'fail'}\n`);
    }
}

// function solution(expression) {
//     const operators = new Set(['+', '-', '*', '/']);
//     const operatorsStack = [];
//     const valuesStack = [];
//     // is on last iteration was a operator
//     let isLastOperator = true;

//     expression.split(' ').forEach(symb => {
//         if (operators.has(symb)) {
//             operatorsStack.push(symb);
//         } else {
//             valuesStack.push(isLastOperator ? Number(symb) : eval(valuesStack.pop() + operatorsStack.pop() + symb));
//         }
//         isLastOperator = operators.has(symb);
//     })

//     console.log(operatorsStack);
//     console.log(valuesStack)

//     operatorsStack.reverse().forEach(opers => {
//         let secondOperand = valuesStack.pop();
//         let firstOperand = valuesStack.pop();
//         valuesStack.push(eval(firstOperand + opers + secondOperand));
//     })

//     return valuesStack.pop();
// }

// function solution(expression) {
//     const operators = new Set(['+', '-', '*', '/']);

//     while (/[\+\-\*\/]\s+/g.test(expression)) {
//         expression = expression.replace(/([\+\-\*\/])\s(\-?\d+(\.\d+)?)\s(\-?\d+(\.\d+)?)/g, (str) => {
//             const parts = str.split(' ');
//             return String(eval(parts[1] + parts[0] + parts[2]));
//         });
//     }

//     return Number(expression);
// }

main();