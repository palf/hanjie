// function colorForState (state) {
//     switch (state) {
//         case 'on':
//             return '#000000';
//         case 'off':
//             return '#ffffff';
//         default:
//             return '#9999cc';
//     }
// }

function applyState (pair) {
    $(pair.element).
        removeClass('on').
        removeClass('off').
        removeClass('unknown').
        addClass(pair.cell.state);
        // animate({
        //     backgroundColor: colorForState(pair.cell.state)
        // }, 100);
}

function Renderer (board) {

this.everything = function () {
        _.each(board.allPairs(), applyState);
    };

    this.update = function (cell) {
        var pair = board.getPairForCell(cell);
        applyState(pair);
    };

    this.addHighlight = function (cells) {
        _.each(cells, function (cell) {
            var pair = board.getPairForCell(cell);
            $(pair.element).addClass('selected');
        });
    };

    this.removeHighlight = function (cells) {
        _.each(cells, function (cell) {
            var pair = board.getPairForCell(cell);
            $(pair.element).removeClass('selected');
        });
    };
}

module.exports = Renderer;
