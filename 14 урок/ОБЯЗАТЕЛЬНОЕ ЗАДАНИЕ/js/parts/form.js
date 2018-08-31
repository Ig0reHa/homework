function form() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = `<img src="img/success.svg">`;
	message.failure = "Что то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		statusMessage1 = document.createElement('div'),
		form1 = document.getElementById('form1'),
		input1 = form1.getElementsByTagName('input')[0],
		input2 = form1.getElementsByTagName('input')[1];
	

	form.addEventListener('submit', function(event) {
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

	form1.addEventListener('submit', function(event) {
		statusMessage1.classList.add('status1');
		event.preventDefault();
		form1.appendChild(statusMessage1);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		let formData = new FormData(form1);

		request.send(formData);

		request.onreadystatechange = function() {
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
		}

		input1.value = "";
		input2.value = "";
			
	});
}

module.exports = form;