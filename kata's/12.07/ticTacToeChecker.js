function main() {
    const tests = new Map([
        //[[[0,0,1], [0,1,2], [2,1,0]], -1],
        [[[1,2,0], [0,1,2], [0,0,1]], 1]
    ])

    for (const test of tests) {
        console.log(`test: ${test[0]}`);
        console.log(`expected: ${test[1]}`);
        console.log(`returned: ${solution(test[0])}`);
        console.log(`status: ${solution(test[0]) === test[1] ? 'success' : 'fail'}\n`);
    }

}

function solution(board) {
    const winningSpots = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[2][0], board[1][1], board[0][2]] 
    ];

    const gameStatus = () => {
        let isEmptySpots = false;
        for (let spots of winningSpots) {
            if (spots[0] === spots[1] && spots[1] === spots[2] && spots[0] !== 0) {
                return spots[0];
            }
            if (spots[0] === 0 || spots[1] === 0 || spots[2] === 0) {
                isEmptySpots = true;
            }
        }

        return isEmptySpots ? -1 : 0;
    };

    return gameStatus();
}

main();