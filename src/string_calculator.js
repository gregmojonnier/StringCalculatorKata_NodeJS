module.exports = StringCalculator;

function StringCalculator() {
    this.sum = function(numbers) {
        if (!numbers) {
            return 0;
        }

        var legalDelimieters = [' ', ','];
        for (var i in legalDelimieters) {
            var sum = splitByDelimiterAndSum(numbers, legalDelimieters[i]);
            if (sum) {
                return sum;
            }
        }

        return Number(numbers);
    };
}

function splitByDelimiterAndSum(numbers, delimiter) {
    var nums = numbers.split(delimiter);
    if (nums.length > 1) {
        return nums.reduce(function(total, currentNumber) {
            return total + Number(currentNumber);
        }, 0);
    } else {
        return undefined;
    }
}
