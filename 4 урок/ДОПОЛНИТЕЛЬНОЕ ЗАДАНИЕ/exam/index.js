function getFriendlyNumbers(start, end) {
  let numArr = [];  
  while(start > end || isNaN(start, end) || typeof(start, end) != "number" || start % 1 != 0 || end % 1 != 0 || start < 0 || end < 0){
    return false;
  }      
   for (let i = start; i <= end; i++) {
    for (let s = start; s <= end; s++) {
      if (isFriendly(i, s) && i !== s && i < s) {
        numArr.push([i, s]);
      } 
    }
  } 
  return numArr;  
} 

function isFriendly (num1, num2){
   var summ1 = getDivisorsSumm(num1);
   var summ2 = getDivisorsSumm(num2);

   if (summ1 == num2 && summ2 == num1) {
       return true;
   } else {  
     return false;
   }
}

function getDivisorsSumm (num){
    return getSummDivisors(getDivisors(num));
}

function getDivisors (num) {
    let arr = [];

    for(let i =1; i < num; i++){
        if(num % i == 0){
            arr.push(i)
        }
    }
    return arr;
}

function getSummDivisors (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
         sum += arr[i];
    }
    return sum;
}



module.exports = {
     firstName: 'Igor',
     secondName: 'Tolkachev',
     task: getFriendlyNumbers
}
