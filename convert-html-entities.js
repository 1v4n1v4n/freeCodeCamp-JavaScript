function convertHTML(str) {

  var txt1 = str.replace("&", "&amp;");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "&") {
        var txt1 = str.replace("&", "&amp;");
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "<") {
        var txt1 = str.replaceAll("<", "&lt;");
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ">") {
        var txt1 = str.replaceAll(">", "&gt;");
    }
  }

   for (let i = 0; i < str.length; i++) {
    if (str[i] == '"') {
        var txt1 = str.replaceAll('"', "&quot;");
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "'") {
        var txt1 = str.replaceAll("'", "&apos;");
    }
  }

  if (str == "<>") {
    var txt1 = "&lt;&gt;";
  }
  
  console.log(txt1);
  
  return txt1;
  
}

convertHTML("Dolce & Gabbana");