module.exports = StringCalculator;

function StringCalculator() {
    this.sum = function(numbers) {
        if (!numbers) {
            return 0;
        }

        var sum = splitAndSumByFirstLegalDelimiter(numbers, [' ', ',', '\n']);
        if (sum) {
            return sum;
        } else {
            return Number(numbers);
        }
    };
}

function splitAndSumByFirstLegalDelimiter(numbers, legalDelimiters) {
    for (var i in legalDelimiters) {
        var sum = splitAndSum(numbers, legalDelimiters[i]);
        if (sum) {
            return sum;
        }
    }
    return undefined;
}

function splitAndSum(numbers, delimiter) {
    var nums = numbers.split(delimiter);
    if (nums.length > 1) {
        return nums.reduce(function(total, currentNumber) {
            return total + Number(currentNumber);
        }, 0);
    } else {
        return undefined;
    }
}
