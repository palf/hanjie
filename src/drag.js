var actions = require('./actions');

function Drag (render) {

    var startCell,
        selectedCells = [];

    function thereAre (array ) {
        return !_.isEmpty(array);
    }

    function getCellGroup (start, current) {
        return [ start, current ];
    }


    this.start = function (cell) {
        startCell = cell;
        selectedCells = [ cell ];
    };

    this.update = function (cell) {
        console.log('update');
        if (thereAre(selectedCells)) {
            selectedCells = getCellGroup(startCell, cell);
            console.log(selectedCells);
            render.addHighlight(selectedCells);
        }
    };

    this.stop = function () {
        if (thereAre(selectedCells)) {
            var startState = startCell.state;

            _.each(selectedCells, function (cell) {
                actions.cycleStateFrom(startState, cell);
            });

            render.removeHighlight(selectedCells);
        }
        selectedCells = [];
        render.everything();
    };
}

module.exports = Drag;
