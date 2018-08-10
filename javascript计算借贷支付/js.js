function calculate()
{
  var principal = document.loandata.principal.value;
  var interest = document.loandata.interest.value / 100 / 12;
  var payments = document.loandata.years.value * 12;
  var x = Math.pow(1 + interest, payments);
  var monthly = (principal*x*interest)/(x-1);
  var payment = document.getElementById("payment");
  var total = document.getElementById("total");
  var totalinterest = document.getElementById("totalinterest");
  if (isFinite(monthly)) {
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
    }
    else{
      payment.innerHTML= "";
      total.innerHTML= ""
      totalinterest.innerHTML= "";
    }
}
