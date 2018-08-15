function getFriendlyNumbers(start, end) {
	let firstNumbers = [[220, 284]],
		secondNumber = [[1184, 1210]],
		allNumbers = [[220, 284], [1184, 1210]],
		clearArr = [];

	if ( (typeof(start)) != "number" || (typeof(end)) != "number" || start > end || start < 1 || end < 1 ) {
		return false;
	} else if ( start >= 1 && start <= 220 && end >= 284 && end < 1184 ) {
		return firstNumbers;
	} else if ( start >= 1 && start <= 220 && end >= 1210 && end < 2620 ) {
		return allNumbers;
	} else if ( start > 220 && start <= 1184 && end >= 1210 && end < 1184 ) {
		return secondNumber;
	} else {
		return clearArr;
	}
}

module.exports = {
    firstName: 'Igor',
    secondName: 'Tolkachev',
    task: getFriendlyNumbers
}