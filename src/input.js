var actions = require('./actions');

function InputHandlers (render) {

    this.cycleCell = function (cell) {
        actions.cycleCellState(cell);
        render.update(cell);
    };
}

module.exports = InputHandlers;

