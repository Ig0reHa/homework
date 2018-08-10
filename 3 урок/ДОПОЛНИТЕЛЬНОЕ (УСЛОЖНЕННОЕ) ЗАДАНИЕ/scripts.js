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

function (arg) {
  if ( typeof(arg) != "string" ) {
    alert("Можно ввести только строку!");
  }
  arg.trim();

  function cutMessage(str) {
    if (str.length > 50) {
      return str.slice(0, 50) + '...';
    }

    return str;
  }

  cutMessage(arg);

  return arg;
}