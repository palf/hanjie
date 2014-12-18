function fetchPuzzleData () {
    return {
        rows: [[0], [1, 1], [1, 1], [0], [1, 1], [4]],
        cols: [[0], [2, 2], [1], [1], [2, 2], [0]]
    };
}

module.exports = {
    fetch: fetchPuzzleData
};

// var boardConfig = [
//     [ 0, 1, 0 ],
//     [ 1, 1, 0 ],
//     [ 1, 0, 1 ]
// ]

// var x = {
//     rows: [[1], [2], [1, 1]],
//     cols: [[2], [2], [1]]
// }

// var binary = [
//     2, 6, 5
// ]

