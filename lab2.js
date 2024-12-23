"use strict";

const nums = [5, 2, 7, 3, 4];

const asyncMap = (array, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promises = array.map((item) => squareNums(item));

      Promise.all(promises).then(resolve).catch(reject);
    }, ms);
  });
};

const squareNums = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * num), 100);
  });
};

asyncMap(nums, 100).then((result) => console.log(result));
