module.exports = StringCalculator;

var legalDelimiters = [' ', ',', '\n'];

function StringCalculator() {
    this.sum = function(numbers) {
        if (!numbers) {
            return 0;
        }

        var allowedDelimiters = legalDelimiters.slice();
        var customDelimiterInfo = parseCustomDelimiterInformation(numbers);
        if (customDelimiterInfo) {
            numbers = numbers.slice(customDelimiterInfo.numbersStartIdx);
            allowedDelimiters.unshift(customDelimiterInfo.customDelimiter);
        }

        var sum = splitAndSumByFirstLegalDelimiter(numbers, allowedDelimiters);
        if (sum) {
            return sum;
        } else {
            return verifyAndReturnNumber(numbers);
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
            return total + verifyAndReturnNumber(currentNumber);
        }, 0);
    } else {
        return undefined;
    }
}

function verifyAndReturnNumber(stringNumber) {
    var number = Number(stringNumber);
    if (number < 0) {
        throw 'StringCalculator does not support negative numbers!';
    } else if (number > 1000) {
        throw 'StringCalculator does not support numbers > 1000!';
    }
    return number;
}

function parseCustomDelimiterInformation(numbers) {
    if (!numbers) {
        return undefined;
    }
    var customInfo = {};

    if (numbers.startsWith('//[') && numbers.includes(']', 3)) {
        var closingBracketIdx = numbers.indexOf(']');
        customInfo.numbersStartIdx = closingBracketIdx + 1;
        customInfo.customDelimiter = numbers.slice(3, closingBracketIdx);
    } else if (numbers.startsWith('//')) {
        customInfo.numbersStartIdx = 3;
        customInfo.customDelimiter = numbers[2];
    } else {
        return undefined;
    }

    return customInfo;
}
