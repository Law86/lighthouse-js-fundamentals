const isOdd = function(num){
  if(num % 2 === 0){
    return false;
  }
  return true;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("45 is odd: " + isOdd(45));