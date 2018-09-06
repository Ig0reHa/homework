window.addEventListener('DOMContentLoaded', function() {

	let gift = document.getElementsByClassName('fixed-gift')[0],
		popupGift = document.getElementsByClassName('popup-gift')[0];
		popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', () => {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
	});

	popupGift.addEventListener('click', () => {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout(function () {
			popupGift.style.display = 'none';
		}, 1000);
	});

	popupGiftClose.addEventListener('click', () => {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout(function () {
			popupGift.style.display = 'none';
		}, 1000);
	});

});