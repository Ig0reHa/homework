var budget = prompt("Ваш бюджет на месяц?", 90000);
var market = prompt( "Название вашего магазина?", "Amazon");
var shopGoods = [
	prompt("Какой тип товаров будем продавать?", "Техника 1"),
	prompt("Какой тип товаров будем продавать?", "Техника 2"),
	prompt("Какой тип товаров будем продавать?", "Техника 3")
];
var employers = {
	Ivan: "Director",
	Egor: "Designer",
	Elena: "Developer"
};
var isopen = true;

// shopGoods[0] = prompt("Какой тип товаров будем продавать?", "Техника 1");
// shopGoods[1] = prompt("Какой тип товаров будем продавать?", "Техника 2");
// shopGoods[2] = prompt("Какой тип товаров будем продавать?", "Техника 3");

var mainList = {
	budget,
	market,
	shopGoods,
	employers,
	isopen
}

alert(budget / 30);

console.log(shopGoods);
console.log(mainList);