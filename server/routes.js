exports.hanjie = function (req, res) {
    var data = { title: 'Hanjie' };
    res.render('hanjie', data);
};

exports.submit = function (req, res) {
    res.send(404);
};
