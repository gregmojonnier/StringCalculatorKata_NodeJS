var program = require('commander');

program
	.version('1.0.0')
	.option('-s sum_numbers <string of numbers>', 'sums delimeter separated string of numbers.')
	.parse(process.argv);

if (program.sum_numbers) {
		console.log('Ready to start summing!');
		console.log(program.sum_numbers);
}
else {
	console.log('Only capable of summing numbers at the moment.');
}
