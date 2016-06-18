var test = require('tape');
var calculator = require('../src/string_calculator');

test('Constructing string calculators', function (t) {
	var calc1 = calculator();
	var calc2 = calculator();

	t.isNotEqual(calc1, calc2, 'each calculator is a unique instance')
	t.end();
});
