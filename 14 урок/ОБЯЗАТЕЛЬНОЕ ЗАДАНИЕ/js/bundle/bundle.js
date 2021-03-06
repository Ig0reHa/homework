"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			var calc = require('../parts/calc.js'),
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
	}, { "../parts/calc.js": 2, "../parts/form.js": 3, "../parts/modal.js": 4, "../parts/slider.js": 5, "../parts/tab.js": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
		function calc() {
			var persons = document.getElementsByClassName('counter-block-input')[0],
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
	}, {}], 3: [function (require, module, exports) {
		function form() {
			var message = new Object();
			message.loading = "Загрузка...";
			message.success = "<img src=\"img/success.svg\">";
			message.failure = "Что то пошло не так...";

			var form = document.getElementsByClassName('main-form')[0],
			    input = form.getElementsByTagName('input'),
			    statusMessage = document.createElement('div'),
			    statusMessage1 = document.createElement('div'),
			    form1 = document.getElementById('form1'),
			    input1 = form1.getElementsByTagName('input')[0],
			    input2 = form1.getElementsByTagName('input')[1];

			form.addEventListener('submit', function (event) {
				statusMessage.classList.add('status');
				event.preventDefault();
				form.appendChild(statusMessage);

				// AJAX
				var request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				var formData = new FormData(form);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status === 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
							//Добавляем контент на страницу
						}
					} else {
						statusMessage.innerHTML = message.failure;
					}
				};

				for (var i = 0; i < input.length; i++) {
					input[i].value = "";
					// Очистка полей ввода
				}
			});

			form1.addEventListener('submit', function (event) {
				statusMessage1.classList.add('status1');
				event.preventDefault();
				form1.appendChild(statusMessage1);

				// AJAX
				var request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				var formData = new FormData(form1);

				request.send(formData);

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						statusMessage1.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status === 200 && request.status < 300) {
							statusMessage1.innerHTML = message.success;
							//Добавляем контент на страницу
						}
					} else {
						statusMessage1.innerHTML = message.failure;
					}
				};

				input1.value = "";
				input2.value = "";
			});
		}

		module.exports = form;
	}, {}], 4: [function (require, module, exports) {
		function modal() {
			var more = document.querySelector('.more'),
			    overlay = document.querySelector('.overlay'),
			    close = document.querySelector('.popup-close'),
			    descrMore = document.querySelectorAll('.description-btn');

			more.addEventListener('click', function () {
				this.classList.add('.more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});

			for (var i = 0; i < descrMore.length; i++) {
				descrMore[i].addEventListener('click', function () {
					this.classList.add('.more-splash');
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});
			}

			close.addEventListener('click', function () {
				overlay.style.display = 'none';
				more.classList.remove('.more-splash');
				document.body.style.overflow = '';
			});
		}

		module.exports = modal;
	}, {}], 5: [function (require, module, exports) {
		function slider() {
			var slideIndex = 1,
			    slides = document.getElementsByClassName('slider-item'),
			    prev = document.querySelector('.prev'),
			    next = document.querySelector('.next'),
			    dotsWrap = document.querySelector('.slider-dots'),
			    dots = document.getElementsByClassName('dot');

			// setInterval(function() {
			// 	showSlides(slideIndex += 1);
			// }, 4000);

			showSlides(slideIndex);

			function showSlides(n) {

				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}

				for (var i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}

				for (var _i = 0; _i < dots.length; _i++) {
					dots[_i].classList.remove('dot-active');
				}

				slides[slideIndex - 1].style.display = 'block';
				dots[slideIndex - 1].classList.add('dot-active');
			}

			function plusSlides(n) {
				showSlides(slideIndex += n);
			}

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			prev.addEventListener('click', function () {
				plusSlides(-1);
			});

			next.addEventListener('click', function () {
				plusSlides(1);
			});

			dotsWrap.addEventListener('click', function (event) {
				for (var i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
						currentSlide(i);
					}
				}
			});
		}

		module.exports = slider;
	}, {}], 6: [function (require, module, exports) {
		function tab() {

			var tab = document.getElementsByClassName('info-header-tab'),
			    tabContent = document.getElementsByClassName('info-tabcontent'),
			    info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for (var i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}

			hideTabContent(1);

			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}

			info.addEventListener('click', function (event) {
				var target = event.target;
				if (target.className == 'info-header-tab') {
					for (var i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
			});
		}

		module.exports = tab;
	}, {}], 7: [function (require, module, exports) {
		function timer() {
			var deadline = '2018-09-24';

			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date()),
				    seconds = Math.floor(t / 1000 % 60),
				    minutes = Math.floor(t / 1000 / 60 % 60),
				    hours = Math.floor(t / (1000 * 60 * 60));

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			};

			function setClock(id, endtime) {

				var timer = document.getElementById(id),
				    hours = timer.querySelector('.hours'),
				    minutes = timer.querySelector('.minutes'),
				    seconds = timer.querySelector('.seconds');

				function updateClock() {
					function addZero(num) {
						if (num > 0 && num < 10) {
							return '0' + num;
						} else {
							return num;
						}
					}

					var t = getTimeRemaining(endtime);
					hours.innerHTML = addZero(t.hours);
					minutes.innerHTML = addZero(t.minutes);
					seconds.innerHTML = addZero(t.seconds);

					if (t.seconds < 0) {
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					}

					if (t.total <= 0) {
						clearInterval(timeInterval);
					}
				};

				updateClock();
				var timeInterval = setInterval(updateClock, 1000);
			}

			setClock('timer', deadline);
		}

		module.exports = timer;
	}, {}] }, {}, [1]);