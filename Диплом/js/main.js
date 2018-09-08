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


	// Аккордеон

	let accordionHeading = document.getElementsByClassName('accordion-heading'),
    	accordionBlock = document.getElementsByClassName('accordion-block');

	for (let i = 0; i < accordionHeading.length; i++) {
	    accordionHeading[i].addEventListener('click', function() {
	        if (!(this.classList.contains('active'))) {
	            for(let i = 0; i < accordionHeading.length; i++) {
	                accordionHeading[i].classList.remove('active'); 
	            }
	            this.classList.add('active');
	            accordionBlock[i].classList.add('animated', 'zoomIn');
	        }
	    })
	}


	// Картинки при наведении

	// let imgBlock3 = document.getElementsByClassName('sizes-block')[2],
	// 	realImg = document.getElementsByClassName('realImg')[2];

	// imgBlock3.onmouseenter = () => {
	// 	realImg.style.display = 'block';
	// 	realImg.classList.add('animated', 'fadeIn');
	// }

	// imgBlock3.onmouseleave = () => {
	// 	realImg.style.display = 'none';
	// }

	let imgBlock = document.getElementsByClassName('sizes-block'),
		realImg = document.getElementsByClassName('realImg'),
		sizes = document.getElementsByClassName('sizes')[0];

	if(window.matchMedia('(min-width: 768px)').matches) {
	  for(let i = 0; i < imgBlock.length; i++ ) {
			imgBlock[i].onmouseenter = () => {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			}
			imgBlock[i].onmouseleave = () => {
				realImg[i].style.display = 'none';
			}
		}
	}

	if(window.matchMedia('(max-width: 768px)').matches) {
	  for(let i = 0; i < imgBlock.length; i++ ) {
			imgBlock[i].onclick = () => {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			}

			// Не работает

			// sizes.onclick = (event) => {
			// 	if (event.target == realImg[i]) {
			// 		for(let i = 0; i < imgBlock.length; i++ ) {
			// 			realImg[i].style.display = 'none';
			// 		}
			// 	}
			// }
		}
	}



});
