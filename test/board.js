var expect = require('expect.js');

function getGridIndices (r, c, index) {
    return {
        row: Math.floor( index / c ) % r,
        column: index % c
    };
}

describe("Positioning", function () {
    describe("with a 1x1 puzzle", function () {
        it("places element 0 in row 0", function () {
            var result = getGridIndices(1, 1, 0);
            expect(result.row).to.be(0);
        });

        it("places element 1 in row 0", function () {
            var result = getGridIndices(1, 1, 1);
            expect(result.row).to.be(0);
        });

        it("places element 0 in column 0", function () {
            var result = getGridIndices(1, 1, 0);
            expect(result.column).to.be(0);
        });

        it("places element 1 in column 0", function () {
            var result = getGridIndices(1, 1, 1);
            expect(result.column).to.be(0);
        });
    });

    describe("with a 2x3 puzzle", function () {
        describe("rows", function () {
            it("places element 0 in row 0", function () {
                var result = getGridIndices(2, 3, 0);
                expect(result.row).to.be(0);
            });

            it("places element 1 in row 0", function () {
                var result = getGridIndices(2, 3, 1);
                expect(result.row).to.be(0);
            });

            it("places element 2 in row 0", function () {
                var result = getGridIndices(2, 3, 2);
                expect(result.row).to.be(0);
            });

            it("places element 3 in row 1", function () {
                var result = getGridIndices(2, 3, 3);
                expect(result.row).to.be(1);
            });

            it("places element 4 in row 1", function () {
                var result = getGridIndices(2, 3, 4);
                expect(result.row).to.be(1);
            });

            it("places element 5 in row 1", function () {
                var result = getGridIndices(2, 3, 5);
                expect(result.row).to.be(1);
            });
        });

        describe("columns", function () {
            it("places element 0 in column 0", function () {
                var result = getGridIndices(2, 3, 0);
                expect(result.column).to.be(0);
            });

            it("places element 1 in column 1", function () {
                var result = getGridIndices(2, 3, 1);
                expect(result.column).to.be(1);
            });

            it("places element 2 in column 2", function () {
                var result = getGridIndices(2, 3, 2);
                expect(result.column).to.be(2);
            });

            it("places element 3 in column 0", function () {
                var result = getGridIndices(2, 3, 3);
                expect(result.column).to.be(0);
            });

            it("places element 4 in column 1", function () {
                var result = getGridIndices(2, 3, 4);
                expect(result.column).to.be(1);
            });

            it("places element 5 in column 2", function () {
                var result = getGridIndices(2, 3, 5);
                expect(result.column).to.be(2);
            });
        });
    });


    describe("with a 4x9 puzzle", function () {
        var expectations = [
            { r: 0, c: 0},
            { r: 0, c: 1},
            { r: 0, c: 2},
            { r: 0, c: 3},
            { r: 0, c: 4},
            { r: 0, c: 5},
            { r: 0, c: 6},
            { r: 0, c: 7},
            { r: 0, c: 8},
            { r: 1, c: 0},
            { r: 1, c: 1},
            { r: 1, c: 2},
            { r: 1, c: 3},
            { r: 1, c: 4},
            { r: 1, c: 5},
            { r: 1, c: 6},
            { r: 1, c: 7},
            { r: 1, c: 8},
            { r: 2, c: 0},
            { r: 2, c: 1},
            { r: 2, c: 2},
            { r: 2, c: 3},
            { r: 2, c: 4},
            { r: 2, c: 5},
            { r: 2, c: 6},
            { r: 2, c: 7},
            { r: 2, c: 8},
            { r: 3, c: 0},
            { r: 3, c: 1},
            { r: 3, c: 2},
            { r: 3, c: 3},
            { r: 3, c: 4},
            { r: 3, c: 5},
            { r: 3, c: 6},
            { r: 3, c: 7},
            { r: 3, c: 8},
            { r: 0, c: 0},
            { r: 0, c: 1},
            { r: 0, c: 2}
        ];

        describe("rows", function () {
            function checkRow (index, value) {
                return function () {
                    var result = getGridIndices(4, 9, index);
                    expect(result.row).to.be(value);
                };
            }

            for (var i = 0 ; i < expectations.length ; i++) {
                var expRow = expectations[i].r;
                var assertion = checkRow(i, expRow);

                it("places element " + i + " in row " + expRow, assertion);
            }
        });

        describe("columns", function () {
            function checkColumn (index, value) {
                return function () {
                    var result = getGridIndices(4, 9, index);
                    expect(result.column).to.be(value);
                };
            }

            for (var j = 0 ; j < expectations.length; j++) {
                var expCol = expectations[j].c;
                var assertion = checkColumn(j, expCol);

                it("places element " + j + " in column " + expCol, assertion);
            }
        });
    });
});
