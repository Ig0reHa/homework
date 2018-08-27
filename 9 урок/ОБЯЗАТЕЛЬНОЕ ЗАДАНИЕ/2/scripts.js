let btn = document.getElementById('btn'),
	user = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};
 
btn.addEventListener('click', function() {
	showUser.call(user, 'Petrov', 'Ivan');
});