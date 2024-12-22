"use strict";

const nums = [5, 2, 7, 3, 4];

// console.log(nums.map((x) => x * x));

const asyncMap = (array, callback, finishingCallback, delay) => {
  const result = [];
  let completed = 0;

  for (const item of array) {
    const startTime = Date.now();
    callback(item, (value) => {
      const elapsedTime = Date.now() - startTime; //час що минув після обчислення squareNums
      const remainingTime = delay - elapsedTime; // час, що залишився після завершення squareNums
      const handleResult = () => {
        result.push(value);
        completed++;
        if (completed === array.length) finishingCallback(result);
      };
      if (remainingTime > 0) {
        setTimeout(handleResult, 100); //support for debounce(additional executing delay)
      }
    });
  }
};

const squareNums = (num, done) => {
  setTimeout(() => {
    done(num * num);
  }, 50);
};

asyncMap(nums, squareNums, (result) => console.log(result), 100);
