var expect = require('expect.js');
var actions = require('../src/actions');
var CELL_STATE = require('../src/cell_states');

describe('Actions', function () {
    describe(".cycleCellState(cell)", function () {
        describe("when cell is ON", function () {
            var cell = { state: CELL_STATE.ON };

            it("changes the cell to OFF", function () {
                actions.cycleCellState(cell);
                expect(cell.state).to.be(CELL_STATE.OFF);
            });
        });

        describe("when cell is OFF", function () {
            var cell = { state: CELL_STATE.OFF };

            it("changes the cell to UNKNOWN", function () {
                actions.cycleCellState(cell);
                expect(cell.state).to.be(CELL_STATE.UNKNOWN);
            });
        });

        describe("when cell is UNKNOWN", function () {
            var cell = { state: CELL_STATE.UNKNOWN };

            it("changes the cell to ON", function () {
                actions.cycleCellState(cell);
                expect(cell.state).to.be(CELL_STATE.ON);
            });
        });

        describe("when cell is in an invalid state", function () {
            var cell = { state: undefined };

            it("changes the cell to UNKNOWN", function () {
                actions.cycleCellState(cell);
                expect(cell.state).to.be(CELL_STATE.UNKNOWN);
            });
        });
    });

    describe(".cycleStateFrom(state, cell)", function () {
        var cell;

        beforeEach(function () {
            cell = {};
        });

        describe("when state is ON", function () {
            var state = CELL_STATE.ON;

            it("changes the cell to OFF", function () {
                actions.cycleStateFrom(state, cell);
                expect(cell.state).to.be(CELL_STATE.OFF);
            });
        });

        describe("when state is OFF", function () {
            var state = CELL_STATE.OFF;

            it("changes the cell to UNKNOWN", function () {
                actions.cycleStateFrom(state, cell);
                expect(cell.state).to.be(CELL_STATE.UNKNOWN);
            });
        });

        describe("when state is UNKNOWN", function () {
            var state = CELL_STATE.UNKNOWN;

            it("changes the cell to ON", function () {
                actions.cycleStateFrom(state, cell);
                expect(cell.state).to.be(CELL_STATE.ON);
            });
        });

        describe("when state is in an invalid state", function () {
            it("changes the cell to UNKNOWN", function () {
                actions.cycleStateFrom(undefined, cell);
                expect(cell.state).to.be(CELL_STATE.UNKNOWN);
            });
        });
    });
});
