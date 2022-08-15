// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
  sum = sum + arr[i];
}
 avg = sum / arr.length;
 avg = +avg.toFixed(2); 

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++){
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }    
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0], dif;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  dif = Math.abs(max - min);
  return dif;
}
