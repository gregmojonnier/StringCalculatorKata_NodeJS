module.exports = StringCalculator;

function StringCalculator() {
    this.sum = function(numbers) {
        if (!numbers) {
            return 0;
        }
        var nums = numbers.split(' ');
        if (nums.length > 1) {
            return nums.reduce(function(total, currentNumber) {
                return total + Number(currentNumber);
            }, 0);
        }
        nums = numbers.split(',');
        if (nums.length > 1) {
            return nums.reduce(function(total, currentNumber) {
                return total + Number(currentNumber);
            }, 0);
        }
        return Number(numbers);
    };
}
