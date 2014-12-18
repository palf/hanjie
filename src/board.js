function getGridIndices (r, c, index) {
    return {
        row: index % c,
        column: Math.floor( index / r )
    };
}

function createCellElement (cell, position) {
    var element = document.createElement('div');
    $(element).
        addClass('cell').
        addClass('unknown').
        css(position);
    return element;
}

function buildBoard (puzzle) {
    var cellSize = 33;
    var r = puzzle.rows.length;
    var c = puzzle.columns.length;
    var getPuzzleGridIndices = _.partial(getGridIndices, r, c);

    return _.map(puzzle.cells, function (cell, index) {
        var gridIndex = getPuzzleGridIndices(index);
        var position = {
            left: gridIndex.row * cellSize,
            top: gridIndex.column * cellSize,
            width: cellSize -1,
            height: cellSize -1
        };
        return {
            cell: cell,
            element: createCellElement(cell, position)
        };
    });
}

function addToBoard (pairs) {
    var boardDiv = $('#board');
    _.map(pairs, function (pair) {
        boardDiv.append(pair.element);
    });
}


function Board (puzzle) {
    var pairs = buildBoard(puzzle);
    addToBoard(pairs);

    this.allPairs = function () {
        return pairs;
    };

    this.getPairForCell = function (cell) {
        return _.find(pairs, function (pair) {
            return pair.cell === cell;
        });
    };
}

module.exports = Board;
