"use strict";

const nums = [5, 2, 7, 3, 4];

// console.log(nums.map((x) => x * x));

const asyncMap = (array, callback, callback2) => {
  const result = [];
  let completed = 0;

  for (const item of array) {
    callback(item, (value) => {
      result.push(value);
      completed++;
      if (completed === array.length) callback2(result);
    });
  }
};

const squareNums = (num, done) => {
  setTimeout(() => {
    done(num * num);
  }, 50);
};

asyncMap(nums, squareNums, (result) => console.log(result));
