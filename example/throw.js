var test = require('../').test;

test('throws and catches', function(assert) {
    assert.plan(2);
    throw new Error('whatever');
});

test('throws and crashes', function(assert) {
    assert.plan(2);

    setTimeout(function () {
        throw new Error('doom');
    }, 100);
});
