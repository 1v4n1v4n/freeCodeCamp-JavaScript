function uniteUnique(arr) {
  
var args = []; // Empty array, at first.
for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
}

if (args.length == 3) {
  var merged = [...args[0], ...args[1], ...args[2]];
}

if (args.length == 2) {
  var merged = [...args[0], ...args[1]];
}

if (args.length == 4) {
  var merged = [...args[0], ...args[1], ...args[2], ...args[3]];
}

console.log(merged);

var unique = merged.filter((v, i, a) => a.indexOf(v) === i); 
return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);