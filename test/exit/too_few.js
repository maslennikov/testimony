var falafel = require('falafel');
var test = require('../../').test;

test('array', function (t) {
    t.plan(6);

    var src = '(' + function () {
        var xs = [ 1, 2, [ 3, 4 ] ];
        var ys = [ 5, 6 ];
        g([ xs, ys ]);
    } + ')()';

    var output = falafel(src, function (node) {
        if (node.type === 'ArrayExpression') {
            node.update('fn(' + node.source() + ')');
        }
    });

    var arrays = [
        [ 3, 4 ],
        [ 1, 2, [ 3, 4 ] ],
        [ 5, 6 ],
        [ [ 1, 2, [ 3, 4 ] ], [ 5, 6 ] ]
    ];

    Function(['fn','g'], output)(
        function (xs) {
            t.deepEqual(arrays.shift(), xs);
            return xs;
        },
        function (xs) {
            t.deepEqual(xs, [ [ 1, 2, [ 3, 4 ] ], [ 5, 6 ] ]);
        }
    );
});
