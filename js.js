function countMoney() {
  var percent = parseFloat(document.getElementById("percent").value);
  var amount = parseFloat(document.getElementById("amount").value);
  var incr = parseFloat(document.getElementById("incr").value);
  var html = "<ol>"
  var check = document.getElementById("yes");
    //alert(check);
  for(var j = 1; j <= 12; j++){
    amount += amount / 100 * percent;
    html += "<li>" + amount + "</li>"
    if (check.checked) {
      percent += incr;
}
