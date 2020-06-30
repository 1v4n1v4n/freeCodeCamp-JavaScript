function dropElements(arr, func) {
  var i;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      newArr = arr.slice(i);
      break;
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
