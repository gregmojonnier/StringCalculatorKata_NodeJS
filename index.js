var program = require('commander');
var StringCalculator = require('./src/string_calculator');

program
    .version('1.0.0')
    .option('-s sum_numbers <string of numbers>',
            'sums delimeter separated string of numbers.')
    .parse(process.argv);

if (program.sum_numbers) {
        console.log('Ready to start summing!');
        var calculator = new StringCalculator();
        var result = calculator.sum(program.sum_numbers);
        console.log('The sum of', '"' + program.sum_numbers + '"', 'is', result);
} else {
    console.log('Only capable of summing numbers at the moment.');
}
