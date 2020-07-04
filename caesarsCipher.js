function rot13(str) {
  var arr = [];
  var final = "";
  
  for (let i in str) {  
    if(str[i].charCodeAt() <= 64 || str[i].charCodeAt() > 90) {
      arr.push(str[i].charCodeAt());
    }

    if(str[i].charCodeAt() > 64 && str[i].charCodeAt() <= 77) {
      arr.push(str[i].charCodeAt() + 13);
    }
    if(str[i].charCodeAt() > 77 && str[i].charCodeAt() <= 90) {
      arr.push(str[i].charCodeAt() - 13);
    }
  }

  for (let j in arr) {
    final += String.fromCharCode(arr[j]);
  }
  return final;
}
rot13("SERR PBQR PNZC");