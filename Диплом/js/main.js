window.addEventListener('DOMContentLoaded', () => {

	let modalIsOpen = false;

	// GIFT POPUP

	let gift = document.getElementsByClassName('fixed-gift')[0],
		popupGift = document.getElementsByClassName('popup-gift')[0];
		popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', () => {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
		gift.remove();
		modalIsOpen = true;
	});

	popupGiftClose.addEventListener('click', () => {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout( () => {
			popupGift.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});



	// DESIGN POPUP


	let popupDesign = document.querySelector('.popup-design'),
		orderBtn = document.querySelectorAll('.button-design'),
		popupDesignClose = document.getElementsByClassName('popup-close')[2];

	for (let i = 0; i < orderBtn.length; i++ ) {
		orderBtn[i].addEventListener('click', () => {
			popupDesign.classList.remove('fadeOut');
			popupDesign.style.display = 'block';
			popupDesign.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
		});
	}

	popupDesignClose.addEventListener('click', () => {
		popupDesign.classList.remove('fadeIn');
		popupDesign.classList.add('fadeOut');
		setTimeout( () => {
			popupDesign.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});


	// CONSULTATION POPUP

	let popupConsultation = document.getElementsByClassName('popup-consultation')[0],
		ConsultationBtn = document.querySelectorAll('.button-consultation');
		popupConsultationClose = document.getElementsByClassName('popup-close')[0];

	for (let i = 0; i < ConsultationBtn.length; i++ ) {
		ConsultationBtn[i].addEventListener('click', () => {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
		});
	}

	popupConsultationClose.addEventListener('click', () => {
		popupConsultation.classList.remove('fadeIn');
		popupConsultation.classList.add('fadeOut');
		setTimeout( () => {
			popupConsultation.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// Если пользователь на странице больше 60 секунд - появится модальное окно (popup-consultation)

	let popupTimeOut = setTimeout( () => {
		if ( modalIsOpen == false ) {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
		}
	}, 60000);

	if ( modalIsOpen ) {
		clearTimeout(popupTimeOut);
	}

	

	// При нажатии на подложку popup исчезает

	window.onclick = (event) => {
	    if (event.target == popupGift) {
	        popupGift.classList.remove('fadeIn');
			popupGift.classList.add('fadeOut');
			setTimeout( () => {
				popupGift.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }

	    if (event.target == popupDesign) {
	        popupDesign.classList.remove('fadeIn');
			popupDesign.classList.add('fadeOut');
			setTimeout( () => {
				popupDesign.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }

	    if (event.target == popupConsultation) {
	        popupConsultation.classList.remove('fadeIn');
			popupConsultation.classList.add('fadeOut');
			setTimeout( () => {
				popupConsultation.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }
	}



	// Подгрузка блоков
	
	let StylesImg = document.querySelectorAll('.styles-2'),
		loadMoreBtn = document.getElementsByClassName('button-styles')[0];

	loadMoreBtn.addEventListener('click', () => {
		for (let i = 0; i < StylesImg.length; i++ ) {
			StylesImg[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			StylesImg[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'zoomIn');
			loadMoreBtn.remove();
		}
	});



});
