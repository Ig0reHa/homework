$(document).ready(function() {

	$('.modal').css({
		transform: 'scale(0)',
		opacity: '0'
	});
	
	$('.main_btna').on('click', function() {
		$('.overlay').fadeIn();
		$('.modal').animate({
			display: 'block',
			transform: 'scale(1)',
			opacity: '1'
		}, 1000);
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut();
		$('.modal').slideUp("slow");
	});

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = `<img src="img/success.svg">`;
	message.failure = "Что то пошло не так...";

	// input = form.getElementsByTagName('input'),

	let form = $('.form-inline'),
		name = $('.contactform_name'),
		phone = $('.contactform_phone'),
		email = $('.contactform_mail'),
		textMessage = $('#textar'),
		statusMessage = document.createElement('div');

	form.on('submit', function(event) {
		statusMessage.classList.add('status');
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
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
		}

		for ( let i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очистка полей ввода
		}
	});

});