let menuItems = document.getElementsByClassName('menu-item'),
	menu = document.querySelector('.menu'),
	title = document.getElementById('title'),
	li = document.createElement("li"),
	adv = document.querySelector('.adv'),
	question = document.getElementById('prompt');

menuItems[1].innerHTML = "Второй пункт";
menuItems[2].innerHTML = "Третий пункт";

li.classList.add('menu-item');
li.innerHTML = "Пятый пункт";

menu.appendChild(li);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.innerHTML = "Мы продаем только подлинную технику Apple";

adv.remove();

question.innerHTML = prompt("Какое у вас отношение к технике apple ?", "Нейтральное");