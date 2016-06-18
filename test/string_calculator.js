var test = require('tape');
var Calculator = require('../src/string_calculator');

test('StringCalculator.Constructor', function(t) {
	var calc1 = new Calculator();
	var calc2 = new Calculator();

	t.isNotEqual(calc1, calc2, 'each calculator is a unique instance');
	t.end();
});

test('StringCalculator.Sum - Correctness', function(t) {
    var calc = new Calculator();

	t.isEqual(calc.sum(''), 0, 'an empty string equals 0');
	t.isEqual(calc.sum('18'), 18, 'a single number equals itself');
	t.isEqual(calc.sum('1 8'), 9, 'two space delimited numbers equals their sum');
	t.isEqual(calc.sum('1 8 10'), 19, 'three space delimited numbers equals their sum');
	t.isEqual(calc.sum('1,8,10'), 19, 'three comma delimited numbers equals their sum');
	t.isEqual(calc.sum('1\n8\n10'), 19, 'three new line delimited numbers equals their sum');
	t.isEqual(calc.sum('1 1000 1'), 1002, 'correctly sums a string containing a very large number');
    t.end();
});

test('StringCalculator.Sum - Quirks', function(t) {
    var calc = new Calculator();

	t.throws(function() {
        calc.sum('4 -10');
        }, 'throws an exception when asked to sum negative numbers');
    t.throws(function() {
        calc.sum('1 1001');
    }, 'throws an exception when asked to sum numbers > 1000');
	t.end();
});

test('StringCalculator.Sum - Custom Delimiter', function(t) {
    var calc = new Calculator();

    var result = calc.sum('//#2#2#2#2');
	t.isEqual(result, 8, 'a single char delimiter can be defined at the start with //');
    t.isEqual(calc.sum('//#2'), 2, 'a single number with a custom delimiter equals itself');
    t.isEqual(calc.sum('//#'), 0, 'an empty string with a custom delimiter equals zero');
	t.end();
});
