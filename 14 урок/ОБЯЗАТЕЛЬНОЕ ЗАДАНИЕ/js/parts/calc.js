function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function () {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (restDays.value == '') {
			totalValue.innerHTML = 0;
		} else if (persons.value != '' && restDays.value == '') {
			totalValue.innerHTML = 0;
		} else if (persons.value == '' && restDays.value != '') {
			totalValue.innerHTML = 0;
		} else if (persons.value == '0' || restDays.value == '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	persons.addEventListener('keypress', function () {
		this.value = this.value.replace(/\D/g, "");
	});

	restDays.addEventListener('change', function () {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (persons.value == '') {
			totalValue.innerHTML = 0;
		} else if (persons.value == '' && restDays.value != '') {
			totalValue.innerHTML = 0;
		} else if (persons.value != '' && restDays.value == '') {
			totalValue.innerHTML = 0;
		} else if (restDays.value == '0' || persons.value == '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('keypress', function () {
		this.value = this.value.replace(/\D/g, "");
	});

	place.addEventListener('change', function () {
		if (persons.value == '' || restDays.value == '') {
			totalValue.innerHTML = 0;
		} else if (persons.value == '0' || restDays.value == '0') {
			totalValue.innerHTML = 0;
		} else {
			var a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
		}
	});
}

module.exports = calc;