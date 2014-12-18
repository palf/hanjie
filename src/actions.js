var STATE = require('./cell_states');

function nextState (state) {
    switch (state) {
        case STATE.UNKNOWN:
            return STATE.ON;

        case STATE.ON:
            return STATE.OFF;

        default:
            return STATE.UNKNOWN;
    }
}

function cycleCellState (cell) {
    cell.state = nextState(cell.state);
}

function cycleStateFrom (state, cell) {
    cell.state = nextState(state);
}

// function setStateTo (state, cell) {
//     switch (state) {
//         case STATE.ON:
//         case STATE.OFF:
//         case STATE.UNKNOWN:
//             cell.state = state;
//             break;
//         default:
//             cell.state = STATE.UNKNOWN;
//             break;
//     };
// }

module.exports = {
    cycleCellState: cycleCellState,
    cycleStateFrom: cycleStateFrom
};
