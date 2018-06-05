var express = require('express');
var app = express();
var vuetest = require('./vuetest.js');

;
(function test(req, res) {
    console.log('start');
    console.log('start');
    vuetest.somefunction();

})();

app.use((req, res) => {
    var test = req.query.test
    console.log(test);
    res.send('some string');
});

app.listen(3000, () => console.log('3000'))