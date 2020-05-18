function countInvestment() {
    const addCurrency = " zł";
    let enterTheAmount = document.getElementById("amountPaidIn").value; 
    let month = document.getElementById("numberOfMonths").value; 
    let interest = document.getElementById('interest').value; 
    let roundedCapital = ((enterTheAmount * 100) / 100).toFixed(2); 
    let typeOfCapitalization = document.getElementById("typeOfCapitalization").value 
    let tax = document.getElementById("tax").value 
    let TheValueOfCapital = (roundedCapital * (1 + (interest / 100 / typeOfCapitalization)) ** (typeOfCapitalization / 12 * month) - roundedCapital).toFixed(2);
    let amountpaid = parseFloat(document.getElementById("amountpaid").innerHTML);
    let interestValue = parseFloat(document.getElementById("interestValue").innerHTML);
    let TheAmountOfTax = document.getElementById("TheAmountOfTax");
    TheAmountOfTax.innerHTML = ((TheValueOfCapital * tax).toFixed(2)) + addCurrency;
    document.getElementById("amountpaid").innerHTML = roundedCapital + addCurrency; 
    document.getElementById("interestValue").innerHTML = (TheValueOfCapital - (TheValueOfCapital * tax)).toFixed(2) + addCurrency; 
    document.getElementById("TheSumOfSavings").innerHTML = ((amountpaid + interestValue).toFixed(2)) + addCurrency;
}




