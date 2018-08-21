window.onload = function() {
    (function() {
    	function addZero(num){
			if (num > 0 && num < 10) { 
				return '0' + num;
			} else {
				return num;
			}
		}

        var date = new Date();
        var time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
        document.getElementsByTagName('div')[0].innerHTML = time;
        window.setTimeout(arguments.callee, 1000);
    })();
};