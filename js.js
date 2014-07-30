function countMoney() {

  var percent = parseFloat(document.getElementById("percent").value);
  var amount = parseFloat(document.getElementById("amount").value);
  var incr = parseFloat(document.getElementById("incr").value);
  var html = "<ol>"
  for(var j = 1; j <= 12; j++){
    amount += amount / 100 * percent;
    percent += incr;
    html += "<li>" + amount + "</li>"
  }
  html = html +"</ol>";
  document.getElementById('result').innerHTML = html;
}
