var test = require('tape');
var calculator = require('../src/string_calculator');

test('Constructing string calculators', function (t) {
	var calc1 = new calculator();
	var calc2 = new calculator();

	t.isNotEqual(calc1, calc2, 'each calculator is a unique instance')
	t.end();
});
