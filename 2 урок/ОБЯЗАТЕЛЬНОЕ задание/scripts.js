let money = prompt("Ваш бюджет на месяц?", 90000);
let name = prompt( "Название вашего магазина?", "Amazon");

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50) {
		console.log('Всё верно!')
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}

// 										WHILE

// i = 0

// while ( i < 5 ) {
// 	let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50) {
// 		console.log('Всё верно!')
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		i = i - 1;
// 	}

// 	i++
// }

// 										DO WHILE

// i = 0

// do {
// 	let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50) {
// 		console.log('Всё верно!')
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		i = i - 1;
// 	}
// 	i++
// }
// while ( i < 5 );




alert(mainList.budget / 30);

console.log(mainList);
