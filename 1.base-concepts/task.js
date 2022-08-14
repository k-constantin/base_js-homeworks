function solveEquation(a, b, c) {
  let arr = [], d, x1, x2;
  "use strict";
  d = (b ** 2) - 4 * a * c;
  if (d > 0) {
    x1 = (- b + Math.sqrt(d))/(2 * a);
    x2 = (- b - Math.sqrt(d))/(2 * a);
    arr[0] = x1;
    arr[1] = x2;
  }
  if (d === 0) {
    x1 = (- b / (2 * a));
    arr[0] = x1;
  }
  
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, n, date1, timeDiff, P, S;
  "use strict";
  date1 = new Date();
  timeDiff = date.getTime() - date1.getTime();

  if (isFinite(percent) && isFinite(contribution) && isFinite(amount) && (timeDiff > 0)) {
    n = Math.ceil(timeDiff / (1000 * 3600 * 24 * 31));
    P = percent / (12 * 100);
    S = amount - contribution;
    totalAmount = (S * (P + (P / (((1 + P) ** n) - 1)))) * n;
    totalAmount = +totalAmount.toFixed(2);
    console.log(totalAmount);
  } else if (isFinite(percent) === false) {
    totalAmount = `Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`;
  } else if (isFinite(contribution) === false) {
    totalAmount = `Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`;
  } else if (isFinite(amount) === false) {
    totalAmount = `Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`;
  } else if (timeDiff < 0) {
    totalAmount = `Параметр <Дата> содержит неправильное значение`;
  }

  return totalAmount;
}
