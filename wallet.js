let debt = 0;
let maxDebt = 12000;
let bank = 0;


function buy(thing, cost) {
    if(bank >= cost) {
        console.log("you bought a " + thing + " with " + cost + "€");
        bank -= cost;
    }
    else {
        const needMoney = cost - bank;
        const credit = maxDebt - debt;
        const paidWithBank = cost - needMoney;
        if(needMoney <= credit) {
            bank = 0;
            debt += needMoney;
            console.log("you bought a " + thing + " with " + cost + "€");
            console.log(paidWithBank + " from bank, " + needMoney + " from credit");
        }
        else {
           console.log('you cannot buy a ' + thing);         
        }

    }
}
function payDebt(amount) {
    debt -= amount;
}
function income(title, amount) {
    console.log(title + " added " + amount + "€ to your bank");
    bank += amount;
}

function printBalance() {
    console.log("balance is: " + bank);
}
function printDebt() {
    console.log("Debt is: " + debt);
}

income("salary", 5000);
printBalance();
buy("car", 1000);
printBalance();
buy("mouse", 500);
printBalance();
income("Youtube", 500);
printBalance();
buy("House", 10000);
printBalance();
printDebt();
buy("villa", 15000);