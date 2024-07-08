function main() {
    const tests = new Map([
        ['0', 0],
        ['123', 123],
        ['123.456', 123.456], 
        ['+ -5 5', 0], 
        ['* + 2 2 3', 12],
        ['/ + 3 5 * 2 2', 2]
    ]);

    for (let test of tests) {
        console.log(`test: ${test[0]}`);
        console.log(`expected: ${test[1]}`);
        console.log(`returned: ${solution(test[0])}`);
        console.log(`status: ${solution(test[0]) === test[1] ? 'success' : 'fail'}\n`);
    }
}

function solution(expression) {
    const operators = new Set(['+', '-', '*', '/']);
    const operatorsStack = [];
    const valuesStack = [];
    // is on last iteration was a operator
    let isLastOperator = true;

    expression.split(' ').forEach(symb => {
        if (operators.has(symb)) {
            operatorsStack.push(symb);
        } else {
            valuesStack.push(isLastOperator ? Number(symb) : eval(valuesStack.pop() + operatorsStack.pop() + symb));
        }
        isLastOperator = operators.has(symb);
    })

    operatorsStack.reverse().forEach(opers => {
        let secondOperand = valuesStack.pop();
        let firstOperand = valuesStack.pop();
        valuesStack.push(eval(firstOperand + opers + secondOperand));
    })

    return valuesStack.pop();
}

main();