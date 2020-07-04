function palindrome(str) {

  function reverse(str){
    let reversed = "";
    for(let char of str){
      reversed = char + reversed;
    }
    return reversed;
  }

  var noSpace = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  var revNoSpace = reverse(noSpace);

  if (noSpace === revNoSpace) {
    return true;
  }
  return false;
}

palindrome("eye");