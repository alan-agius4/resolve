var path = require('path');
var test = require('tap').test;
var resolve = require('../');

test('moduleDirectory strings', function (t) {
    t.plan(4);
    var dir = __dirname + '/module_dir';
    var xopts = {
        basedir : dir,
        moduleDirectory: 'xmodules'
    };
    resolve('aaa', xopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/xmodules/aaa/index.js');
    });
    
    var yopts = {
        basedir : dir,
        moduleDirectory: 'ymodules'
    };
    resolve('aaa', yopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/ymodules/aaa/index.js');
    });
});