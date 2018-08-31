window.addEventListener('DOMContentLoaded', function() {

	let calc = require('../parts/calc.js'),
		form = require('../parts/form.js'),
		modal = require('../parts/modal.js'),
		slider = require('../parts/slider.js'),
		tab = require('../parts/tab.js'),
		timer = require('../parts/timer.js');

	tab();
	timer();
	calc();
	slider();
	modal();
	form();

});