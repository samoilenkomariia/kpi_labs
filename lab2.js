"use strict";

const nums = [5, 2, 7, 3, 4];

const asyncMap = (array, ms, result = []) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const item of array) {
        result.push(item * item);
      }
      resolve(result);
    }, ms);
  });
};

asyncMap(nums, 100).then((result) => console.log(result));
