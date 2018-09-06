window.addEventListener('DOMContentLoaded', () => {

	// GIFT POPUP

	let gift = document.getElementsByClassName('fixed-gift')[0],
		popupGift = document.getElementsByClassName('popup-gift')[0];
		popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', () => {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
	});

	popupGiftClose.addEventListener('click', () => {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout( () => {
			popupGift.style.display = 'none';
		}, 1000);
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
		});
	}

	popupDesignClose.addEventListener('click', () => {
		popupDesign.classList.remove('fadeIn');
		popupDesign.classList.add('fadeOut');
		setTimeout( () => {
			popupDesign.style.display = 'none';
		}, 1000);
	});


	// При нажатии на подложку popup исчезает

	window.onclick = (event) => {
	    if (event.target == popupGift) {
	        popupGift.classList.remove('fadeIn');
			popupGift.classList.add('fadeOut');
			setTimeout( () => {
				popupGift.style.display = 'none';
			}, 1000);
	    }

	    if (event.target == popupDesign) {
	        popupDesign.classList.remove('fadeIn');
			popupDesign.classList.add('fadeOut');
			setTimeout( () => {
				popupDesign.style.display = 'none';
			}, 1000);
	    }
	}

});
