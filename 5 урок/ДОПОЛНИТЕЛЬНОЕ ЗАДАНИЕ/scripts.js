let time = new Date(),
	hours = time.getHours(),
	minutes = time.getMinutes(),
	seconds = time.getSeconds(),
	date = time.getDate(),
	month = time.getMonth(),
	year = time.getFullYear();


function addZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

document.write( addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + addZero(date) + "." + addZero((month + 1)) + "." + year + "</br>" );

let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'нояябрь', 'декябрь'];

document.write(months[month]);

var firstDate = document.getElementById('firstDate'),
	secondDate = document.getElementById('secondDate');

function myDate() {
	let firstDateVal = firstDate.value,
		secondDateVal = secondDate.value,
		startDate = new Date(firstDateVal),
		endDate = new Date(secondDateVal),
		i = startDate.getTime(),
		y = endDate.getTime();
		aswer = Math.abs((y - i)/86400000);
	document.getElementById('output').value = aswer;	
}

firstDate.addEventListener('change', () => {
	myDate();
});

secondDate.addEventListener('change', () => {
	myDate();
});

// if ( firstDate != null ) {
// 	let date1 = new Date(firstDate.value),
// 		date2 = new Date(secondDate.value);

// 	firstDate.addEventListener('change', () => {
// 		let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
// 		console.log(daysLag);
// 	});
// }
