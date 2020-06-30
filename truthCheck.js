function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i][pre] === "yes"){
      return true;
    }
    if (isNaN(collection[1][pre]) && pre === "single") {
      return false;
    }
    if (collection[i][pre] === undefined || collection[i][pre] === "" || collection[i][pre] === 0 || collection[i][pre] === null) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
