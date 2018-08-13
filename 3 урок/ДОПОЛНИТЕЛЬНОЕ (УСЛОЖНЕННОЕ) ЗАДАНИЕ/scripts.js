let string = "урок-3-был слишком легким";

function toUpperCaseFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

string = toUpperCaseFirst(string);

let re = /-/g;
string = string.replace(re, " ");

console.log(string);

let letter = string.slice(19, 25);

let rep_let = letter.slice(-2);
letter = letter.replace(rep_let, "o");

alert(letter);





let arr = [20, 33, 1, "Человек", 2, 3];

arr.splice(3, 1);

for ( let i = 0; i < arr.length; i++ ) {
  arr[i] = Math.pow(arr[i], 3);
}

var sum = 0;

function arraySum(array){
  for(var i = 0; i < array.length; i++){
      sum += array[i];
  }
}

arraySum(arr);

let finishsum = Math.sqrt(sum);

console.log(finishsum);





var words = "                   wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";

function fun(arg) {
  if ( typeof(arg) != "string" ) {
    alert("Можно ввести только строку!");
  }

  arg = arg.trim();

  function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + '...';
      // итоговая длина равна maxlength
    }

    return str;
  }

  arg = truncate(arg, 50);

  return arg;
}

alert(fun(words));
