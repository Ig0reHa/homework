function sum(a, b) {
  return a + b > 10;
}

function arrays() {
  let array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
  let num = array[1][1];
  return num;
}

function each() {
  var each = function(startArr, f){return f(startArr)};
  var arr = [64, 49, 36, 25, 16];
  var myFunc = function(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
      newArr[i]=Math.sqrt(a[i]);
    }
    return newArr;
  }
  return each(arr, myFunc);
}

module.exports = {
    task: sum,
    task1: arrays,
    task2: each
}