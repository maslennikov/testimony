var testimony = require('../');

testimony.test('only3 test 1', function (t) {
    t.fail('not 1');
    t.end();
});

testimony.test('only3 test 2', {only: true}, function (t) {
    t.end();
});

testimony.test('only3 test 3', function (t) {
    t.fail('not 3');
    t.end();
});
