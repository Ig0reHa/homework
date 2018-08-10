var week = ["Понeдельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

 for (var i = 0; i < week.length; i++) {
      switch (i) {
      case 0:
        document.write(week[i] + "<br>");
        break; 
      case 1:
        document.write(week[i] + "<br>");
        break; 
      case 2:
        document.write(week[i] + "<br>");
        break; 
      case 3:
        document.write(week[i] + "<br>");
        break; 
      case 4:
        document.write("<i>" + week[i] + "<br>" + "</i>");
        break; 
      case 5:
        document.write("<strong>" + week[i] + "<br>" + "</strong>");
        break; 
      case 6:
        document.write("<strong>" + week[i] + "<br>" + "</strong>");
        break;
      default:
        alert( "В коде ошибка !" );
        break;
    }
 };

var arr = ["2464568", "32189", "654", "796", "2589", "45674", "365412"];

for (var a = 0; a < arr.length; a++) {
	if ( arr[a].substring(0, 1) == 3 || arr[a].substring(0, 1) == 7 ) {
		document.write( arr[a] + "</br>" );
	}
}