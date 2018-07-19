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

var withdrawFees = 2.50;
var balance = document.getElementById("balance");

function withdraw (amount) {
    return balance - amount;
}

window.onload = function() {
    balance.innerHTML = _balance;   
};


