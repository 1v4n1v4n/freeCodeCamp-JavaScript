function addTogether() {
  var a = arguments[0];
  var b = arguments[1];

  function isNum(num) {
    return Number.isInteger(num);
  }

  if (isNum(a)) {
    if (isNum(b)) {
      return a + b;
    }else if (!b) {
      return function(b) {
        if (isNum(b)) {
          return a + b;
        }
      }
    }
  }
}

addTogether(2,3);
