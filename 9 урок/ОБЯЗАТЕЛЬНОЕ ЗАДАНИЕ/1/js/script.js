window.addEventListener('DOMContentLoaded', function() {
	
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide') ) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for ( let i = 0; i < tab.length; i++ ) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer

	let deadline = '2018-08-24';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};

	function setClock(id, endtime) {
		
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			function addZero(num){
				if (num > 0 && num < 10) { 
					return '0' + num;
				} else {
					return num;
				}
			}

			let t = getTimeRemaining(endtime);
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
		let timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);

	var linkNav = document.querySelectorAll('[href^="#"]'),
    	V = 0.5;

	for (var i = 0; i < linkNav.length; i++) {
	    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
	        e.preventDefault(); //отменяем стандартное поведение
	        var w = window.pageYOffset,  // производим прокрутка прокрутка
	            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
	        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
	            start = null;
	        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
	        function step(time) {
	            if (start === null) start = time;
	            var progress = time - start,
	                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
	            window.scrollTo(0,r);
	            if (r != w + t) {
	                requestAnimationFrame(step)
	            } else {
	                location.hash = hash  // URL с хэшем
	            }
	        }
	    }, false);
	}

// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descrMore = document.querySelectorAll('.description-btn');

	more.addEventListener('click', function() {
		this.classList.add('.more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for ( let i = 0; i < descrMore.length; i++ ) {
		descrMore[i].addEventListener('click', function() {
			this.classList.add('.more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('.more-splash');
		document.body.style.overflow = '';
	});

});