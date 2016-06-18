module.exports = StringCalculator;

function StringCalculator() {
    this.sum = function(numbers) {
        if (!numbers) {
            return 0;
        }
        var nums = numbers.split(' ');
        if (nums.length > 1) {
            var sum = 0;
            nums.forEach(function(i) {
                sum += Number(i);
            });
            return sum;
        }
        return Number(numbers);
    };
}
