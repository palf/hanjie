var puzzleData = require('./puzzleData');
var Hanjie = require('./hanjie');
var Board = require('./board');
var Renderer = require('./render');
var Input = require('./input');
var Drag = require('./drag');

function attachInputHandlers (puzzleBoard, input, drag) {
    _.each(puzzleBoard.allPairs(), function (pair) {
        // var cycleCell = _.partial(input.cycleCell, pair.cell);
        var startSelection = _.partial(drag.start, pair.cell);
        var updateSelection = _.partial(drag.update, pair.cell);

        $(pair.element).
            mousedown(startSelection).
            mouseenter(updateSelection);
    });
}

$(document).ready(function () {
    "use strict";

    var data = puzzleData.fetch();
    var puzzle = new Hanjie(data);

    var puzzleBoard = new Board(puzzle);
    var render = new Renderer(puzzleBoard);
    var input = new Input(render);

    var drag = new Drag(render);
    attachInputHandlers(puzzleBoard, input, drag);

    var doc = $(document);
    var applySelection = _.partial(drag.stop);
    doc.mouseup(applySelection);

    // doc.mousemove(function (ev) {
    //     drag.update(ev.pageX, ev.pageY);
    // });
    // doc.mouseup(function (ev) {
    //     drag.stop(ev.pageX, ev.pageY);
    // });

    render.everything();

    // var drag = new Drag(render, game, board, checks);
    // var handlers = new Handlers(game, actions);

    // Input.bindDocumentEventHandlers(drag);
    // Input.bindCellEventHandlers(handlers, drag);
    // Input.bindMenuHandlers(game);
});
