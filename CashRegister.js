function checkCashRegister(price, cash, cid) {

    const cashAmount = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00 };
    
    let changeAmount = cash - price;
    
    let drawerTotal = 0;

    for (let cash of cid) {
        drawerTotal += cash[1];
    }

    drawerTotal = drawerTotal.toFixed(2);
    let changeArr = [];
    if (drawerTotal < changeAmount) {
        return {status: "INSUFFICIENT_FUNDS", change: changeArr};
    } else if (drawerTotal == changeAmount) {
        return {status: "CLOSED", change: cid};
    } else {
        cid = cid.reverse();
        for (let cash of cid) {
            let cashType = [cash[0], 0];
            while (changeAmount >= cashAmount[cash[0]] && cash[1] > 0) {
                cashType[1] += cashAmount[cash[0]];
                cash[1] -= cashAmount[cash[0]];
                changeAmount -= cashAmount[cash[0]];
                changeAmount = changeAmount.toFixed(2);
            }
            if (cashType[1] > 0) {
                changeArr.push(cashType);
            }
        }

    }

    if (changeAmount > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    return {status: "OPEN", change: changeArr};        
}

console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));