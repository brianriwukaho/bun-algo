export function isValidSudoku(board: string[][]): boolean {
    const squareSets: Set<number>[][] = [
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
        [new Set(), new Set(), new Set()],
    ];

    for (let i = 0; i < board.length; i++) {
        const existsInRow = new Set();
        const existsInColumn = new Set();
        for (let j = 0; j < board.length; j++) {
            // validate rows
            const rowValue = board[i][j];
            const rowValueNumber = parseInt(rowValue);
            if (
                !Number.isNaN(rowValueNumber) &&
                existsInRow.has(rowValueNumber)
            ) {
                return false;
            } else {
                existsInRow.add(rowValueNumber);
            }

            // validate columns
            const columnValue = board[j][i];
            const columnValueNumber = parseInt(columnValue);
            if (
                !Number.isNaN(columnValueNumber) &&
                existsInColumn.has(columnValueNumber)
            ) {
                return false;
            } else {
                existsInColumn.add(columnValueNumber);
            }

            // validate 3 x 3 squares
            const squareI = Math.floor(i / 3);
            const squareJ = Math.floor(j / 3);
            const correspondingSet = squareSets[squareI][squareJ];
            const squareValue = board[j][i];
            const squareValueNumber = parseInt(squareValue);
            if (
                !Number.isNaN(squareValueNumber) &&
                correspondingSet.has(squareValueNumber)
            ) {
                return false;
            } else {
                correspondingSet.add(squareValueNumber);
            }
        }
    }

    return true;
}

const input = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const result = isValidSudoku(input);
console.log(result);
