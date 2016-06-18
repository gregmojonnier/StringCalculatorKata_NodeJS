module.exports = StringCalculator;

var legalDelimiters = [' ', ',', '\n'];

function StringCalculator() {
    /**
     * Sums a delimited string of numbers.
     *      Look at unit tests for a behavior overview.
     * @param {string} numbers A string of delimited numbers.
     * @return {number} The sum of the numbers in the string, using the first delimiter that works.
     */
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

/**
 * Finds the sum of a delimited string of numbers using the first delimiter
 *      that works from the specified array of legal delimiters
 * @param {string} numbers A string of delimited numbers.
 * @param {string[]} legalDelimiters An array of legal delimiters.
 * @return {number|undefined} The sum of the first legal delimiter possible to split.
 */
function splitAndSumByFirstLegalDelimiter(numbers, legalDelimiters) {
    for (var i in legalDelimiters) {
        var sum = splitAndSum(numbers, legalDelimiters[i]);
        if (sum) {
            return sum;
        }
    }
    return undefined;
}

/**
 * Splits and sums a delimited string of numbers by a delimiter.
 * @param {string} numbers A string of delimited numbers.
 * @param {string} delimiter A delimiter to split with.
 * @return {number|undefined} The sum when able to split.
 */
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

/**
 * Converts a string into a number and then validates it.
 * @param {string} stringNumber A string of a single number.
 * @return {number} Return stringNumber as a number.
 * @throws Will throw when given negative numbers or > 1000.
 */
function verifyAndReturnNumber(stringNumber) {
    var number = Number(stringNumber);
    if (number < 0) {
        throw 'StringCalculator does not support negative numbers!';
    } else if (number > 1000) {
        throw 'StringCalculator does not support numbers > 1000!';
    }
    return number;
}

/**
 * Parses custom delimiter information out of a number string into an object.
 * @param {string} numbers A string of delimited numbers, possibly with
 *      a custom delimiter specified at the start.
 * @return {Object} Returns an object with the custom delimiter and actual start index.
 */
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
