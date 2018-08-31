$(document).ready(function() {

	$('.modal').css({
		opacity: '0'
	});
	
	$('.main_btna').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').css( { display :"block" } );
        $('.modal').animate({
            opacity: '1'
        }, 1000);
    });

	$('.close').on('click', function() {
		$('.overlay').fadeOut();
		$('.modal').css( { display :"none" } );
        $('.modal').animate({
            opacity: '0'
        }, 1000);
	});

	let form = $('.form-inline'),
		name = $('.contactform_name'),
		phone = $('.contactform_phone'),
		email = $('.contactform_mail'),
		textMessage = $('#textar');

	form.on('submit', function(event) {
		event.preventDefault();

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				form.append(`<p class="form-loading">Загрузка...</p>`);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					form.append(`<p class="form-success">Форма успешно отправлена !</p>`);
					$('.form-loading').remove();
				}
			} else {
				form.append(`<p class="form-fail">Что то пошло не так...</p>`);
			}
		}

		name.val("");
		phone.val("");
		email.val("");
		textMessage.val("");
		
	});

	

});