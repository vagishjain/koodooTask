const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 3,
      account: {
        balance: { amount: 300 },
      },
    }
  ];
  
  const accountTypeChecker = (accountBalanceHistoryArray) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    let result;
    const currentMonthIncluded = true; // if true then current month is included in calculation, else current month is not considered. Please change accordingly.
    
    if(accountBalanceHistoryArray && accountBalanceHistoryArray.length) {
    
        accountBalanceHistoryArray = accountBalanceHistoryArray.sort((a, b) => b.monthNumber - a.monthNumber); // reverse sort
      
        const amountArr = accountBalanceHistoryArray.slice(1).map((element, index) => element.account.balance.amount - accountBalanceHistoryArray[index].account.balance.amount); // array of difference amount
      
      if(currentMonthIncluded) {
          result = amountArr.every((element, index) => element == amountArr[0]); // current month is included
      } else {
        const currentMonthAmount = amountArr.pop(); // current month is removed
        result = amountArr.every((element, index) => element == amountArr[0]);
      }
    }
  
    return result ? "B" : "A";
  };
  
  console.log(accountTypeChecker(accountBalanceHistory));
  // or
  accountTypeChecker(accountBalanceHistory);