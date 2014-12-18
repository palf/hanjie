function createCell () {
    return {
        state: 'unknown'
    };
}

function createArray () {
    return [];
}

function Hanjie (data) {
    var rowCount = data.rows.length;
    var colCount = data.cols.length;
    var celCount = rowCount * colCount;

    var cels = _.times(celCount, createCell);
    var rows = _.times(rowCount, createArray);
    var cols = _.times(colCount, createArray);

    _.each(cels, function (cell, index) {

        var rowIndex = index % colCount;
        var colIndex = index % rowCount;

        rows[rowIndex].push(cell);
        cols[colIndex].push(cell);

    });


    this.rowsData = data.rows;
    this.columnsData = data.cols;

    this.rows = rows;
    this.columns = cols;
    this.cells = cels;
}


module.exports = Hanjie;
