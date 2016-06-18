var test = require('tape');
var Calculator = require('../src/string_calculator');

test('StringCalculator.Constructor', function(t) {
	var calc1 = Calculator();
	var calc2 = Calculator();

	t.isNotEqual(calc1, calc2, 'each calculator is a unique instance');
	t.end();
});
