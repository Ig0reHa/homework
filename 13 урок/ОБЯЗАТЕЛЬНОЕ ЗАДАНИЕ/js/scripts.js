$(document).ready(function() {

	$('.main_btn').on('click', function() {
		$('.overlay').fadeIn(1000);
        $('.modal').css({
            "position": "absolute",
            "display":"block",
            "top":"-100%"
         });
         $('.modal').animate( { top:"10%" }, 1000);
    });

	$('[href="#sheldure"]').on('click', function() {
		$('.overlay').fadeIn(1000);
        $('.modal').css({
            "position": "absolute",
            "display":"block",
            "top":"-100%"
         });
         $('.modal').animate( { top:"10%" }, 1000);
    });

	$('.main_btna').on('click', function() {
		$('.overlay').fadeIn(1000);
        $('.modal').css({
            "position": "absolute",
            "display":"block",
            "top":"-100%"
         });
         $('.modal').animate( { top:"10%" }, 1000);
    });

	$('.close').on('click', function() {
        $('.modal').animate( { top:"-100%" }, 1000);
        $('.overlay').animate({
		    opacity: '0',
		}, 1000);
		$('.overlay').fadeOut(1000);
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