// customer
// bankAccount
// balance
// fees 
// withdrawal 
// transaction 
// Interest 
// interestRate

// deposit
// withdraw
// getInterest

var customer = "";
var _balance = 100;
var withdrawTotal = 20;

var withdrawFees = 2.50;

var balance = document.getElementById("balance");
var _withdraw =

 function withdraw(){
     _balance = _balance - withdrawFees - withdrawTotal;
    return balance.innerHTML = _balance; 
};


window.onload = function() {            // load up balance in table
    balance.innerHTML = _balance;   
};


