var test = require('tape');
var Calculator = require('../src/string_calculator');

test('StringCalculator.Constructor', function(t) {
	var calc1 = new Calculator();
	var calc2 = new Calculator();

	t.isNotEqual(calc1, calc2, 'each calculator is a unique instance');
	t.end();
});

test('StringCalculator.Sum', function(t) {
    var calc = new Calculator();

	t.isEqual(calc.sum(''), 0, 'an empty string equals 0');
	t.isEqual(calc.sum('18'), 18, 'a single number equals itself');
	t.isEqual(calc.sum('1 8'), 9, 'two space delimited numbers equals their sum');
	t.isEqual(calc.sum('1 8 10'), 19, 'three space delimited numbers equals their sum');
	t.end();
});
