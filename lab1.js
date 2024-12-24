"use strict";

const nums = [5, 2, 7, "fd", 4];

// console.log(nums.map((x) => x * x)); ф-ція яку я обрала

const asyncMap = (array, callback, finishingCallback, delay, onError) => {
  const result = [];
  let completed = 0;

  for (const [index, item] of array.entries()) {
    const startTime = Date.now();

    callback(item, (error, value) => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = delay - elapsedTime;

      if (error) {
        onError(error, item);
        result[index] = null;
        completed++;
        if (completed === array.length) finishingCallback(result);
        return;
      }
      const handleResult = () => {
        result[index] = value;
        completed++;
        if (completed === array.length) finishingCallback(result);
      };
      if (remainingTime > 0) {
        setTimeout(handleResult, remainingTime);
      } else handleResult();
    });
  }
};

const squareNums = (num, done) => {
  setTimeout(() => {
    if (typeof num === "number") done(null, num * num);
    else done(new Error("is not a number"), null);
  }, 500);
};

//demo for debounce with no errors
asyncMap(
  nums,
  squareNums,
  (result) => console.log(result),
  100,
  (error, item) => console.error(`Error on item ${item}`, error.message)
);
