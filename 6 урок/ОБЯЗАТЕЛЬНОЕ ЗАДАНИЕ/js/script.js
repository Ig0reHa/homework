let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');


let money,
	price,
	discount;

goods_btn.disabled = true;
budget_btn.disabled = true;
employers_btn.disabled = true;

open.addEventListener('click', () => {
	name_value.textContent = prompt("Название вашего магазина?", "amazon").toUpperCase();
	
	money = prompt("Ваш бюджет на месяц?", 90000);

	while ( isNaN(money) || money == "" || money == null ) {
		money = prompt("Ваш бюджет на месяц?", 90000);
	}

	discount = confirm("Будет скидка?");

	budget_value.textContent = money;

	if ( discount == true ) {
		budget_value.textContent = money * 0.8;
	}	

	goods_btn.disabled = false;
	budget_btn.disabled = false;
	employers_btn.disabled = false;
});

goods_item[0].addEventListener('change', () => {
    if (goods_item[0].value != "") {
      goods_btn.disabled = false;
    } else {
      goods_btn.disabled = true;
    }
});

count_budget_value.disabled = true;

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			i = i - 1;
		}
	}
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if (isNaN(items) && items != "") {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	time = time_value.value;

	if (time < 0) {
			console.log('Такого не может быть!');
			mainList.open = false;
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				mainList.open = false;
				} else {
					console.log('В сутках только 24 часа!');
					mainList.open = false;
					};

	if( mainList.open == true ) {
		isopen_value.style.backgroundColor = '#4cd137';
	} else {
		isopen_value.style.backgroundColor = '#ff3838';
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	employers_value.textContent = "";
	for ( let i = 0; i < hire_employers_item.length ; i++ ) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ', ';
	}
});

hire_employers_item[0].addEventListener('keypress', () => {
	setTimeout(function() {
        var res = /[^а-я ]/g.exec(hire_employers_item[0].value);
        console.log(res);
        hire_employers_item[0].value = hire_employers_item[0].value.replace(res, '');
    }, 0);
});

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
};

