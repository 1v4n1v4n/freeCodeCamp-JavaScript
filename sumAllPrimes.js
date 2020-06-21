function sumPrimes(num) {
  var prime = 0;
  var sum = 0;
  var i = 0;

  while(i <= num) {
    if (isPrime(i)) {
      sum+=i;
    }
    i++;
  }
  return sum;
  }

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

sumPrimes(10);