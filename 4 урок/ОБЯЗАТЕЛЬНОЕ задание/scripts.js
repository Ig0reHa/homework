let money,
	name,
	time,
	price,
	discount;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	budgetPerDay: function budgetPerDay() {
			while ( isNaN(money) || money == "" || money == null ) {
			money = prompt("Ваш бюджет на месяц?", 90000);
		}
	},
	start: function start() {		
		name = prompt("Название вашего магазина?", "amazon");
		time = 21;

		budgetPerDay();
	},
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime() {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}
	},
	dailyBudget: function dailyBudget() {
	 alert( "Ваш ежедневный бюджет : " + mainList.budget / 30 );
	},
	getDiscount: function getDiscount() {
	 if ( discount == true ) {
		price = price * 0.8;
	 }
	},
	getEmployers: function getEmployers() {
		for ( let i = 0; i < 4; i++ ) {
			let num = i + 1;
			nameEmployers = prompt("Имя сотрудника №" + num, "Сотрудник - " + num);
			mainList.employers["Сотрудник №" + num] = nameEmployers;
		}
	},
	chooseShopItems: function chooseShopItems() {	
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую товары", "техника,мебель,стройматериалы");

			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != "") {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите еще", "сантехника"));
				mainList.shopItems.sort();
			} else {
				i = i - 1;
			}
		}
	},
	youCanBuy: function youCanBuy() {
		mainList.shopItems.forEach( function(item, i) {
			let indexnumber = i + 1;
			document.write("У нас вы можете купить: " + item + " - " + indexnumber + " товар" + "</br>");
		});
	}

};

mainList.chooseShopItems();

mainList.youCanBuy();

console.log(mainList);

for ( let key in mainList ) {
	console.log( "Наш магазин включает в себя: " + key );
}
