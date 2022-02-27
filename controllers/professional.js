const path = require('path');
const Data = require('../model/data.json')
exports.getIndex = (req, res, next) => {
    console.log(res.body);
    res.render('index',{
        path: 'index/'
    });
};

exports.getProfessional = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../model/', 'data.json'));
};
